package com.ssafy.pjt1track3.dietboard;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DietBoardRepository {
    void insertDietBoard(DietBoard dietBoard);
    DietBoard selectDietBoard(Long boardId);
    void updateDietBoard(DietBoard dietBoard);
    void deleteDietBoard(Long boardId);
}
