package com.ssafy.pjt1track3.dietboard;

import com.ssafy.pjt1track3.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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


}
