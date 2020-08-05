package com.ssafy.pjt1track3.exercise;

import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    private ExerciseRepository exerciseRepository;

    public ExerciseService(final ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
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
}
