package com.ssafy.pjt1track3.equipmentexercise;

public class EquipmentExercise {
    private Long equipmentExerciseId;
    private Long equipmentId;
    private Long exerciseId;

    public EquipmentExercise(Long equipmentExerciseId, Long equipmentId, Long exerciseId) {
        this.equipmentExerciseId = equipmentExerciseId;
        this.equipmentId = equipmentId;
        this.exerciseId = exerciseId;
    }

    public Long getEquipmentExerciseId() {
        return equipmentExerciseId;
    }

    public void setEquipmentExerciseId(Long equipmentExerciseId) {
        this.equipmentExerciseId = equipmentExerciseId;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }
}
