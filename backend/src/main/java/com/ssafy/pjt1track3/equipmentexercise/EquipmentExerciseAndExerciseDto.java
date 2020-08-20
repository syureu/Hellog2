package com.ssafy.pjt1track3.equipmentexercise;

import io.swagger.annotations.ApiModelProperty;

public class EquipmentExerciseAndExerciseDto {
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
    @ApiModelProperty(
            value = "운동 이름",
            required = true,
            example = "데드리프트",
            hidden = false
    )
    private String name;
    @ApiModelProperty(
            value = "대표 자극 부위",
            required = true,
            example = "둔근 및 대퇴이두근",
            hidden = false
    )
    private String part;

    public EquipmentExerciseAndExerciseDto(Long equipmentExerciseId, Long equipmentId, Long exerciseId, String name, String part) {
        this.equipmentExerciseId = equipmentExerciseId;
        this.equipmentId = equipmentId;
        this.exerciseId = exerciseId;
        this.name = name;
        this.part = part;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPart() {
        return part;
    }

    public void setPart(String part) {
        this.part = part;
    }
}
