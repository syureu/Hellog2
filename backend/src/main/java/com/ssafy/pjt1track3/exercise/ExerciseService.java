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
}
