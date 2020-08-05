package com.ssafy.pjt1track3.exercise;

import com.ssafy.pjt1track3.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/exercises")
public class ExerciseController {

    private ExerciseService exerciseService;
    private UserService userService;

    public ExerciseController(final ExerciseService exerciseService, final UserService userService) {
        this.exerciseService = exerciseService;
        this.userService = userService;
    }

    @PostMapping("/exercise")
    public ResponseEntity<String> createExercise(@RequestBody Exercise exercise, Principal principal) {
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.insertExercise(exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
