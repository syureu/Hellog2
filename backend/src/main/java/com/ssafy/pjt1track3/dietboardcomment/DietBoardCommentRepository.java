package com.ssafy.pjt1track3.dietboardcomment;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DietBoardCommentRepository {
    void insertDietBoardComment(DietBoardComment dietBoardComment);
    DietBoardComment selectDietBoardComment(Long commentId);
    void updateDietBoardComment(DietBoardComment dietBoardComment);
}
