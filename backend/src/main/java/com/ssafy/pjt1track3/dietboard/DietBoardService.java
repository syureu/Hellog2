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
}
