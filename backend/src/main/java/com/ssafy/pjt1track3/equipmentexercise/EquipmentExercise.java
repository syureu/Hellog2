package com.ssafy.pjt1track3.equipmentexercise;

import io.swagger.annotations.ApiModelProperty;

public class EquipmentExercise {
    @ApiModelProperty(
            value = "운동기구별 운동목록 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long equipmentExerciseId;
    @ApiModelProperty(
            value = "운동기구(의 equipmentId)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long equipmentId;
    @ApiModelProperty(
            value = "운동종류(의 exerciseId)",
            required = true,
            example = "1",
            hidden = false
    )
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
