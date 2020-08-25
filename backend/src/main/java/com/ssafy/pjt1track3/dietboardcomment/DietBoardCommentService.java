package com.ssafy.pjt1track3.dietboardcomment;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DietBoardCommentService {

    private DietBoardCommentRepository dietBoardCommentRepository;
    private UserService userService;

    public DietBoardCommentService(final DietBoardCommentRepository dietBoardCommentRepository, final UserService userService) {
        this.dietBoardCommentRepository = dietBoardCommentRepository;
        this.userService = userService;
    }

    public void insertDietBoardComment(DietBoardComment dietBoardComment) {
        dietBoardCommentRepository.insertDietBoardComment(dietBoardComment);
    }

    public DietBoardComment selectDietBoardComment(Long commentId) {
        return dietBoardCommentRepository.selectDietBoardComment(commentId);
    }

    public void updateDietBoardComment(Long commentId, DietBoardComment dietBoardComment) {
        dietBoardComment.setDietBoardCommentId(commentId);
        dietBoardCommentRepository.updateDietBoardComment(dietBoardComment);
    }

    public void deleteDietBoardComment(Long commentId) {
        dietBoardCommentRepository.deleteDietBoardComment(commentId);
    }

    public List<DietBoardComment> selectDietBoardCommentListByContentId(Long contentId) {
        return dietBoardCommentRepository.selectDietBoardCommentListByContentId(contentId);
    }

    public User selectUserByWriter(Long writer) {
        return userService.selectUser(writer);
    }
}
