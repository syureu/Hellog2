package com.ssafy.pjt1track3.exercise;

import io.swagger.annotations.ApiModelProperty;

public class Exercise {
    @ApiModelProperty(
            value = "운동종류 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
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

    public Exercise(Long exerciseId, String name, String part) {
        this.exerciseId = exerciseId;
        this.name = name;
        this.part = part;
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
