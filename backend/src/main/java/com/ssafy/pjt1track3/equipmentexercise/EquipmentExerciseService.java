package com.ssafy.pjt1track3.equipmentexercise;

import org.springframework.stereotype.Service;

@Service
public class EquipmentExerciseService {

    private EquipmentExerciseRepository equipmentExerciseRepository;

    public EquipmentExerciseService(EquipmentExerciseRepository equipmentExerciseRepository) {
        this.equipmentExerciseRepository = equipmentExerciseRepository;
    }

    public void insertEquipmentExercise(EquipmentExercise equipmentExercise) {
        equipmentExerciseRepository.insertEquipmentExercise(equipmentExercise);
    }
}
