package com.ssafy.pjt1track3.dietboard;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DietBoardService {

    private DietBoardRepository dietBoardRepository;
    private UserService userService;

    public DietBoardService(final DietBoardRepository dietBoardRepository, final UserService userService) {
        this.dietBoardRepository = dietBoardRepository;
        this.userService = userService;
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

    public void deleteDietBoard(Long boardId) {
        dietBoardRepository.deleteDietBoard(boardId);
    }

    public List<DietBoard> selectDietBoardList() {
        return dietBoardRepository.selectDietBoardList();
    }

    public User selectUserByWriter(Long writer) {
        return userService.selectUser(writer);
    }
}
