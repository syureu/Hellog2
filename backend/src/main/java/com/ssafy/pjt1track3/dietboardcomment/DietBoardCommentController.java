package com.ssafy.pjt1track3.dietboardcomment;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
@RequestMapping("/api/dietboardcomments")
@Api(
        tags = {"DietBoardComment"},
        description = "식단관리 게시판 댓글"
)
public class DietBoardCommentController {

    private DietBoardCommentService dietBoardCommentService;

    public DietBoardCommentController(final DietBoardCommentService dietBoardCommentService) {
        this.dietBoardCommentService = dietBoardCommentService;
    }

    @PostMapping("/dietboardcomment")
    @ApiOperation(value = "식단관리 게시판에 댓글 하나를 입력 요청합니다.")
    public ResponseEntity<String> createDietBoardComment(@RequestBody DietBoardComment dietBoardComment, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        if (dietBoardComment.getWriter() == null) {
            // 요청 댓글의 작성자 항목이 없다면 불완전한 json인풋
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }

        boolean isAdminFlag = isAdmin(principal);
        User user = dietBoardCommentService.selectUserByWriter(dietBoardComment.getWriter());

        if (user == null) {
            // 요청 댓글의 작성자가 없는 회원이라면
            if (isAdminFlag) {
                // 관리자의 요청이라면 잘못된 요청
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저의 요청이라면
                // 타인의 명의로 입력요청하려고 함 (없는 계정이지만)
                // 권한 밖의 행동, 클라이언트측 값 만드는 것 확인 필요함
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 요청 댓글의 작성자가 있는 회원이라면
            if (isAdminFlag) {
                // 관리자의 요청이라면 바로 처리
                dietBoardCommentService.insertDietBoardComment(dietBoardComment);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저의 요청인데
                if (user.getUsername().equals(principal.getName())) {
                    // 요청자와 요청 댓글의 작성자가 같으면
                    // 옳은 요청이므로 처리
                    dietBoardCommentService.insertDietBoardComment(dietBoardComment);
                    return new ResponseEntity<>("", HttpStatus.OK);
                } else {
                    // 타인의 명의로 입력 요청하려고 한다면 (있는 계정)
                    // 권한 밖, 클라이언트 값 만드는 것 확인할 것
                    return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
                }
            }
        }

        /*
        if(userService.selectUser(dietBoardComment.getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.insertDietBoardComment(dietBoardComment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }

         */
    }

    @GetMapping("/{commentId}")
    @ApiOperation(value = "식단관리 게시판의 댓글 하나를 댓글 번호를 통해 열람 요청합니다.")
    public ResponseEntity<DietBoardComment> readDietBoardComment(@PathVariable Long commentId) {
        // 게시판 댓글은 누구나 볼 수 있다.
        DietBoardComment comment = dietBoardCommentService.selectDietBoardComment(commentId);
        if (comment != null) {
            return new ResponseEntity<>(comment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{commentId}")
    @ApiOperation(value = "식단관리 게시판의 댓글 하나를 댓글 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateDietBoardComment(@PathVariable Long commentId, @RequestBody DietBoardComment dietBoardComment, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        boolean isAdminFlag = isAdmin(principal);
        DietBoardComment comment = dietBoardCommentService.selectDietBoardComment(commentId);
        if (comment == null) {
            // 수정 요청 한 댓글 번호가 존재 하지 않을 때
            if (isAdminFlag) {
                // 관리자라면
                // 잘못된 요청
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저라면
                // 타인의 명의 댓글 수정 요청한것이므로 (없는 댓글이지만)
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 댓글 번호 존재 할 때
            if (isAdminFlag) {
                // 관리자라면
                // 바로 처리
                dietBoardCommentService.updateDietBoardComment(commentId, dietBoardComment);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else if (comment.getWriter().equals(principal.getName())) {
                // 일반 유저인데 댓글 작성자와 로그인한 유저가 같으면
                // 옳은 요청이므로 수정 처리
                dietBoardCommentService.updateDietBoardComment(commentId, dietBoardComment);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저이면서
                // 타인의 명의 댓글 수정 요청한것이므로 (실제 있는 댓글이지만)
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }


        /*
        if(userService.selectUser(dietBoardComment.getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.updateDietBoardComment(commentId, dietBoardComment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @DeleteMapping("/{commentId}")
    @ApiOperation(value = "식단관리 게시판의 댓글 하나를 댓글 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteDietBoardComment(@PathVariable Long commentId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        boolean isAdminFlag = isAdmin(principal);
        DietBoardComment comment = dietBoardCommentService.selectDietBoardComment(commentId);
        if (comment == null) {
            // 댓글 번호의 댓글이 없으면
            if (isAdminFlag) {
                // 관리자라면
                // 잘못된 삭제 요청
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저라면 타인 명의 댓글 (없는 댓글이지만)
                // 삭제 요청을 시도한 것이므로
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            // 댓글 번호의 댓글이 있으면
            if (isAdminFlag) {
                // 관리자라면
                // 바로 처리
                dietBoardCommentService.deleteDietBoardComment(commentId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else if (comment.getWriter().equals(principal.getName())) {
                // 일반 유저인데
                // 삭제하려는 댓글이 자신의 댓글이라면
                // 옳은 요청이므로 처리
                dietBoardCommentService.deleteDietBoardComment(commentId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저이면서
                // 타인의 댓글을 삭제하려고하는 경우 (있는 댓글)
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if(userService.selectUser(dietBoardCommentService.selectDietBoardComment(commentId).getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.deleteDietBoardComment(commentId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/bycontent/{contentId}")
    public ResponseEntity<List<DietBoardComment>> readDietBoardCommentListByContentId(@PathVariable Long contentId) {
        List<DietBoardComment> list = dietBoardCommentService.selectDietBoardCommentListByContentId(contentId);
        if (list.size() > 0) {
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
}
