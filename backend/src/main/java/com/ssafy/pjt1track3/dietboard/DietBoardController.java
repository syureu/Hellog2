package com.ssafy.pjt1track3.dietboard;

import com.ssafy.pjt1track3.user.UserService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/dietboards")
public class DietBoardController {

    private DietBoardService dietBoardService;
    private UserService userService;

    public DietBoardController(final DietBoardService dietBoardService, final UserService userService) {
        this.dietBoardService = dietBoardService;
        this.userService = userService;
    }

    @PostMapping("/dietboard")
    public ResponseEntity<String> createDietBoard(@RequestBody DietBoard dietBoard, Principal principal) {
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.insertDietBoard(dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<DietBoard> readDietBoard(@PathVariable Long boardId) {
        DietBoard board = dietBoardService.selectDietBoard(boardId);
        if(board != null) {
            return new ResponseEntity<>(board, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{boardId}")
    public ResponseEntity<String> updateDietBoard(@PathVariable Long boardId, @RequestBody DietBoard dietBoard, Principal principal) {
        if (userService.selectUser(dietBoard.getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.updateDietBoard(boardId, dietBoard);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{boardId}")
    public ResponseEntity<String> deleteDietBoard(@PathVariable Long boardId, Principal principal) {
        if (userService.selectUser(dietBoardService.selectDietBoard(boardId).getWriter()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            dietBoardService.deleteDietBoard(boardId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
