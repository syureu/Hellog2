package com.ssafy.pjt1track3.dietboard;

import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/dietboards")
@Api(
        tags = {"DietBoardContent"},
        description = "식단관리 게시판 게시글"
)
public class DietBoardController {

    private DietBoardService dietBoardService;
    private UserService userService;

    public DietBoardController(final DietBoardService dietBoardService, final UserService userService) {
        this.dietBoardService = dietBoardService;
        this.userService = userService;
    }

    @PostMapping("/dietboard")
    @ApiOperation(value="식단관리 게시판에 게시글 하나를 입력 요청합니다.")
    public ResponseEntity<String> createDietBoard(@RequestBody DietBoard dietBoard, Principal principal) {
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.insertDietBoard(dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{boardId}")
    @ApiOperation(value="식단관리 게시판의 게시글 하나를 게시글 번호를 통해 열람 요청합니다.")
    public ResponseEntity<DietBoard> readDietBoard(@PathVariable Long boardId) {
        DietBoard board = dietBoardService.selectDietBoard(boardId);
        if(board != null) {
            return new ResponseEntity<>(board, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{boardId}")
    @ApiOperation(value="식단관리 게시판의 게시글 하나를 게시글 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateDietBoard(@PathVariable Long boardId, @RequestBody DietBoard dietBoard, Principal principal) {
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.updateDietBoard(boardId, dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{boardId}")
    @ApiOperation(value="식단관리 게시판의 게시글 하나를 게시글 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteDietBoard(@PathVariable Long boardId, Principal principal) {
        if (userService.selectUser(dietBoardService.selectDietBoard(boardId).getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.deleteDietBoard(boardId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<DietBoard>> readDietBoardList() {
        return new ResponseEntity<>(dietBoardService.selectDietBoardList(), HttpStatus.OK);
    }
}
