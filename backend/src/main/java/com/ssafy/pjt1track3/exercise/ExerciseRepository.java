package com.ssafy.pjt1track3.exercise;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ExerciseRepository {
    void insertExercise(Exercise exercise);
    Exercise selectExercise(Long exerciseId);
    void updateExercise(Exercise exercise);
    void deleteExercise(Long exerciseId);
}
