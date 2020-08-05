package com.ssafy.pjt1track3.equipmentexercise;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EquipmentExerciseRepository {
    void insertEquipmentExercise(EquipmentExercise equipmentExercise);
    EquipmentExercise selectEquipmentExercise(Long eeId);
}
