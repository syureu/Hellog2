package com.ssafy.pjt1track3.dietboardcomment;

import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/dietboardcomments")
@Api(
        tags = {"DietBoardComment"},
        description = "식단관리 게시판 댓글"
)
public class DietBoardCommentController {

    private DietBoardCommentService dietBoardCommentService;
    private UserService userService;

    public DietBoardCommentController(final DietBoardCommentService dietBoardCommentService, final UserService userService) {
        this.dietBoardCommentService = dietBoardCommentService;
        this.userService = userService;
    }

    @PostMapping("/dietboardcomment")
    @ApiOperation(value="식단관리 게시판에 댓글 하나를 입력 요청합니다.")
    public ResponseEntity<String> createDietBoardComment(@RequestBody DietBoardComment dietBoardComment, Principal principal) {
        if(userService.selectUser(dietBoardComment.getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.insertDietBoardComment(dietBoardComment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{commentId}")
    @ApiOperation(value="식단관리 게시판의 댓글 하나를 댓글 번호를 통해 열람 요청합니다.")
    public ResponseEntity<DietBoardComment> readDietBoardComment(@PathVariable Long commentId) {
        DietBoardComment comment = dietBoardCommentService.selectDietBoardComment(commentId);
        if(comment!= null) {
            return new ResponseEntity<>(comment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{commentId}")
    @ApiOperation(value="식단관리 게시판의 댓글 하나를 댓글 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateDietBoardComment(@PathVariable Long commentId, @RequestBody DietBoardComment dietBoardComment, Principal principal) {
        if(userService.selectUser(dietBoardComment.getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.updateDietBoardComment(commentId, dietBoardComment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{commentId}")
    @ApiOperation(value="식단관리 게시판의 댓글 하나를 댓글 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteDietBoardComment(@PathVariable Long commentId, Principal principal) {
        if(userService.selectUser(dietBoardCommentService.selectDietBoardComment(commentId).getWriter()).getUsername().equals(principal.getName())||isAdmin(principal)) {
            dietBoardCommentService.deleteDietBoardComment(commentId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
