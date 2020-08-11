package com.ssafy.pjt1track3.dietboardcomment;

import org.springframework.stereotype.Service;

@Service
public class DietBoardCommentService {

    private DietBoardCommentRepository dietBoardCommentRepository;

    public DietBoardCommentService(final DietBoardCommentRepository dietBoardCommentRepository) {
        this.dietBoardCommentRepository = dietBoardCommentRepository;
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
}
