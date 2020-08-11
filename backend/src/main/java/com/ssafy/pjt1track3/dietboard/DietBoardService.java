package com.ssafy.pjt1track3.dietboard;

import org.springframework.stereotype.Service;

@Service
public class DietBoardService {

    private DietBoardRepository dietBoardRepository;

    public DietBoardService(final DietBoardRepository dietBoardRepository) {
        this.dietBoardRepository = dietBoardRepository;
    }

    public void insertDietBoard(DietBoard dietBoard) {
        dietBoardRepository.insertDietBoard(dietBoard);
    }

    public DietBoard selectDietBoard(Long boardId) {
        return dietBoardRepository.selectDietBoard(boardId);
    }

    public void updateDietBoard(Long boardId, DietBoard dietBoard) {
        dietBoard.setDietBoardContentId(boardId);
        dietBoardRepository.updateDietBoard(dietBoard);
    }
}
