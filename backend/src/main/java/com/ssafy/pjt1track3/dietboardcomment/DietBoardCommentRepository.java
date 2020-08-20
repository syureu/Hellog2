package com.ssafy.pjt1track3.dietboardcomment;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DietBoardCommentRepository {
    void insertDietBoardComment(DietBoardComment dietBoardComment);
    DietBoardComment selectDietBoardComment(Long commentId);
    void updateDietBoardComment(DietBoardComment dietBoardComment);
    void deleteDietBoardComment(Long commentId);
    List<DietBoardComment> selectDietBoardCommentListByContentId(Long contentId);
}
