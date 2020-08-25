package com.ssafy.pjt1track3.exercise;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class ExerciseService {

    private ExerciseRepository exerciseRepository;
    private UserService userService;

    public ExerciseService(final ExerciseRepository exerciseRepository,
                           final UserService userService) {
        this.exerciseRepository = exerciseRepository;
        this.userService = userService;
    }

    public void insertExercise(Exercise exercise) {
        exerciseRepository.insertExercise(exercise);
    }

    public Exercise selectExercise(Long exerciseId) {
        return exerciseRepository.selectExercise(exerciseId);
    }

    public void updateExercise(Long exerciseId, Exercise exercise) {
        exercise.setExerciseId(exerciseId);
        exerciseRepository.updateExercise(exercise);
    }

    public void deleteExercise(Long exerciseId) {
        exerciseRepository.deleteExercise(exerciseId);
    }

    public boolean isCoachByPrincipal(Principal principal) {
        List<String> RoleList = userService.selectRoleListByUsername(principal.getName());
        if(RoleList.contains("COACH")) {
            return true;
        } else {
            return false;
        }
    }
}
