package com.ssafy.pjt1track3.equipmentexercise;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EquipmentExerciseRepository {
    void insertEquipmentExercise(EquipmentExercise equipmentExercise);
    EquipmentExercise selectEquipmentExercise(Long eeId);
    void updateEquipmentExercise(EquipmentExercise equipmentExercise);
    void deleteEquipmentExercise(Long eeId);
    List<EquipmentExerciseAndExerciseDto> selectEquipmentExerciseAndExerciseListByEquipmentId(Long equipmentId);
}
