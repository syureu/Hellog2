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
}
