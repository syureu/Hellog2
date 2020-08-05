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

    public EquipmentExercise selectEquipmentExercise(Long eeId) {
        return equipmentExerciseRepository.selectEquipmentExercise(eeId);
    }

    public void updateEquipmentExercise(Long eeId, EquipmentExercise equipmentExercise) {
        equipmentExercise.setEquipmentExerciseId(eeId);
        equipmentExerciseRepository.updateEquipmentExercise(equipmentExercise);
    }
}
