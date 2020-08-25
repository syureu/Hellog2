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
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
@RequestMapping("/api/exercises")
@Api(
        tags = {"Exercise"},
        description = "운동(이름, 대표 자극 부위)"
)
public class ExerciseController {

    private ExerciseService exerciseService;

    public ExerciseController(final ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/exercise")
    @ApiOperation(value="새로운 운동(이름, 대표 자극 부위) 하나를 입력 요청합니다.")
    public ResponseEntity<String> createExercise(@RequestBody Exercise exercise, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        if(isAdmin(principal)) {
            // 관리자의 요청이라면
            // 바로 처리
            exerciseService.insertExercise(exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 일반 유저의 요청이라면
            // 현재 로그인한 유저가 코치 등급인지 확인해야함
            boolean isCoach = exerciseService.isCoachByPrincipal(principal);
            if(isCoach) {
                // 코치 등급이라면
                // 옳은 요청이므로 처리
                exerciseService.insertExercise(exercise);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 관리자도 코치도 아니라면 일반 유저이므로
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }

        /*
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.insertExercise(exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
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
    public ResponseEntity<String> updateExercise(@PathVariable Long exerciseId, @RequestBody Exercise requestExercise, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        Exercise originExercise = exerciseService.selectExercise(exerciseId);
        if(originExercise == null) {
            // 수정 요청한 운동이 존재하지 않는 경우
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if(isAdmin(principal)) {
            // 관리자의 요청이라면
            // 바로 처리
            exerciseService.updateExercise(exerciseId, requestExercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 일반 유저의 요청이라면
            // 현재 로그인한 유저가 코치 등급인지 확인해야함
            boolean isCoach = exerciseService.isCoachByPrincipal(principal);
            if(isCoach) {
                // 코치 등급이라면
                // 옳은 요청이므로 처리
                exerciseService.updateExercise(exerciseId, requestExercise);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 관리자도 코치도 아니라면 일반 유저이므로
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.updateExercise(exerciseId, exercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @DeleteMapping("/{exerciseId}")
    @ApiOperation(value="운동 하나를 운동 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteExercise(@PathVariable Long exerciseId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        Exercise originExercise = exerciseService.selectExercise(exerciseId);
        if(originExercise == null) {
            // 삭제 요청한 운동이 존재하지 않는 경우
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if(isAdmin(principal)) {
            // 관리자의 요청이라면
            // 바로 처리
            exerciseService.deleteExercise(exerciseId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 일반 유저의 요청이라면
            // 현재 로그인한 유저가 코치 등급인지 확인해야함
            boolean isCoach = exerciseService.isCoachByPrincipal(principal);
            if(isCoach) {
                // 코치 등급이라면
                // 옳은 요청이므로 처리
                exerciseService.deleteExercise(exerciseId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 관리자도 코치도 아니라면 일반 유저이므로
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        List<String> userRoleList = userService.selectRoleListByUsername(principal.getName());
        if (userRoleList.contains("COACH") || isAdmin(principal)) {
            exerciseService.deleteExercise(exerciseId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }
}
