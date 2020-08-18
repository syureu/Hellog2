package com.ssafy.pjt1track3.exercise;

import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/exercises")
@Api(
        tags = {"Exercise"},
        description = "운동(이름, 대표 자극 부위)"
)
public class ExerciseController {

    private ExerciseService exerciseService;
    private UserService userService;

    public ExerciseController(final ExerciseService exerciseService, final UserService userService) {
        this.exerciseService = exerciseService;
        this.userService = userService;
    }

    @PostMapping("/exercise")
    @ApiOperation(value="새로운 운동(이름, 대표 자극 부위) 하나를 입력 요청합니다.")
    public ResponseEntity<String> createExercise(@RequestBody Exercise exercise, Principal principal) {
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.insertExercise(exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{exerciseId}")
    @ApiOperation(value="운동 하나를 운동 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Exercise> readExercise(@PathVariable Long exerciseId){
        Exercise exercise = exerciseService.selectExercise(exerciseId);
        if(exercise != null) {
            return new ResponseEntity<>(exercise, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{exerciseId}")
    @ApiOperation(value="운동 하나를 운동 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateExercise(@PathVariable Long exerciseId, @RequestBody Exercise exercise, Principal principal) {
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.updateExercise(exerciseId, exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{exerciseId}")
    @ApiOperation(value="운동 하나를 운동 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteExercise(@PathVariable Long exerciseId, Principal principal) {
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.deleteExercise(exerciseId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
