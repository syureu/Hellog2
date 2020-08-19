package com.ssafy.pjt1track3.dietboard;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DietBoardRepository {
    void insertDietBoard(DietBoard dietBoard);
    DietBoard selectDietBoard(Long boardId);
    void updateDietBoard(DietBoard dietBoard);
    void deleteDietBoard(Long boardId);
    List<DietBoard> selectDietBoardList();
}
