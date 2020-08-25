package com.ssafy.pjt1track3.dietboard;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
@RequestMapping("/api/dietboards")
@Api(
        tags = {"DietBoardContent"},
        description = "식단관리 게시판 게시글"
)
public class DietBoardController {

    private DietBoardService dietBoardService;

    public DietBoardController(final DietBoardService dietBoardService) {
        this.dietBoardService = dietBoardService;
    }

    @PostMapping("/dietboard")
    @ApiOperation(value = "식단관리 게시판에 게시글 하나를 입력 요청합니다.")
    public ResponseEntity<String> createDietBoard(@RequestBody DietBoard dietBoard, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했으면
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        if (dietBoard.getWriter() == null) {
            // 입력 요청 게시글의 작성자 내역이 빠져있으면
            // 올바르지 않은 json 요청
            // 클라이언트가 올바르지 않은 입력값을 만드는 것으로 예상
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        boolean isAdminFlag = isAdmin(principal);
        User user = dietBoardService.selectUserByWriter(dietBoard.getWriter());
        if (user == null) {
            // 입력 요청 게시글의 작성자가 없으면
            if (isAdminFlag) {
                // 관리자의 경우 없는 명의로 입력 시도한 것
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저의 경우 타인의 명의로 입력 시도 한 것(없는 명의 지만)
                // 클라이언트가 올바르지 않은 입력값을 만드는 것으로 예상
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 입력 요청 게시글의 작성자가 있으며
            if (isAdminFlag || principal.getName().equals(user.getUsername())) {
                // 관리자이거나
                // 요청한 사람과 현재 로그인한 사람이 같으면 (자신의 컨텐츠를 작성하는 것이라면)
                // 옳은 요청이므로 처리
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 관리자도 아닌데 타인의 명의로 입력 시도 하면(있는 명의의 경우)
                // 클라이언트가 올바르지 않은 입력값을 만드는 것으로 예상
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.insertDietBoard(dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/{boardId}")
    @ApiOperation(value = "식단관리 게시판의 게시글 하나를 게시글 번호를 통해 열람 요청합니다.")
    public ResponseEntity<DietBoard> readDietBoard(@PathVariable Long boardId) {
        // 게시글은 누구나 확인 가능
        DietBoard board = dietBoardService.selectDietBoard(boardId);
        if (board != null) {
            return new ResponseEntity<>(board, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{boardId}")
    @ApiOperation(value = "식단관리 게시판의 게시글 하나를 게시글 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateDietBoard(@PathVariable Long boardId, @RequestBody DietBoard dietBoard, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했으면
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        boolean isAdminFlag = isAdmin(principal);
        DietBoard board = dietBoardService.selectDietBoard(boardId);
        if (board == null) {
            // 수정 요청 게시글 번호의 게시글이 없으면
            if (isAdminFlag) {
                // 관리자의 경우 없는 게시글 번호를 수정 시도한 것
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저의 경우 타인의 명의게시글을 수정 시도 한 것(없는 명의 지만)
                // 클라이언트가 올바르지 않은 입력값을 만드는 것으로 예상
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 수정 요청 게시글 번호가 있으면
            if (isAdminFlag) {
                // 관리자는 바로 처리
                dietBoardService.updateDietBoard(boardId, dietBoard);
                return new ResponseEntity<>("", HttpStatus.OK);
            }
            // 관리자가 아닌경우면
            // board의 writer를 통해 그 사람의 아이디를 확인 (이건 무조건 있음)
            User user = dietBoardService.selectUserByWriter(board.getWriter());
            if (user.getUsername().equals(principal.getName())) {
                // 요청한 사람과 현재 로그인한 사람이 같으면 (자신의 컨텐츠를 작성하는 것이라면)
                // 옳은 요청이므로 처리
                dietBoardService.updateDietBoard(boardId, dietBoard);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 관리자도 아닌데 타인의 명의로 입력 시도 하면(있는 명의의 경우)
                // 클라이언트가 올바르지 않은 입력값을 만드는 것으로 예상
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.updateDietBoard(boardId, dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @DeleteMapping("/{boardId}")
    @ApiOperation(value = "식단관리 게시판의 게시글 하나를 게시글 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteDietBoard(@PathVariable Long boardId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했으면
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        boolean isAdminFlag = isAdmin(principal);
        DietBoard board = dietBoardService.selectDietBoard(boardId);
        if (board == null) {
            // 없는 게시글 번호 삭제 요청이 들어왔을 경우
            if (isAdminFlag) {
                // 관리자라면 잘못된 번호로 삭제 요청함 (없는 게시글)
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저라면 잘못된 입력값을 만들고 있을 가능성
                // 어쨋든 권한 밖의 일
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 있는 게시글 번호 삭제 요청이 들어왔을 경우
            if (isAdminFlag) {
                // 관리자라면 일단 처리
                dietBoardService.deleteDietBoard(boardId);
                return new ResponseEntity<>("", HttpStatus.OK);
            }
            // 관리자 아니면
            // 삭제요청된 번호의 글쓴이와 현재 로그인한 사람이 같은지 확인
            User user = dietBoardService.selectUserByWriter(board.getWriter());
            if (user.getUsername().equals(principal.getName())) {
                // 동일인이면 옳은 요청이니까 처리
                dietBoardService.deleteDietBoard(boardId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 타인이면 아무튼 권한밖의 일을 저지름
                // 클라이언트 확인
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }

        /*
        if (userService.selectUser(dietBoardService.selectDietBoard(boardId).getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.deleteDietBoard(boardId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/")
    public ResponseEntity<List<DietBoard>> readDietBoardList() {
        // 게시판은 누구나 볼 수 있으므로 일단 전체 게시글 리턴
        // 실제로 쓸려면 페이지네이션 적용 무조건 필요
        return new ResponseEntity<>(dietBoardService.selectDietBoardList(), HttpStatus.OK);
    }
}
