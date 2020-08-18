package com.ssafy.pjt1track3.record;

import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

public class RecordV2Dto {
    @ApiModelProperty(
            value = "운동 이름",
            required = true,
            example = "데드리프트",
            hidden = false
    )
    private String exerciseName;
    @ApiModelProperty(
            value = "세트 수",
            required = true,
            example = "3",
            hidden = false
    )
    private int sett;
    @ApiModelProperty(
            value = "무게",
            required = true,
            example = "100",
            hidden = false
    )
    private int weight;
    @ApiModelProperty(
            value = "횟수",
            required = true,
            example = "8",
            hidden = false
    )
    private int countt;
    @ApiModelProperty(
            value = "운동 시작 시간",
            required = true,
            example = "2020-08-17T21:19:24.471+09:00",
            hidden = false
    )
    private Date startTime;
    @ApiModelProperty(
            value = "운동 종료 시간",
            required = true,
            example = "2020-08-17T21:24:24.471+09:00",
            hidden = false
    )
    private Date endTime;

    public RecordV2Dto(String exerciseName, int sett, int weight, int countt, Date startTime, Date endTime) {
        this.exerciseName = exerciseName;
        this.sett = sett;
        this.weight = weight;
        this.countt = countt;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public int getSett() {
        return sett;
    }

    public void setSett(int sett) {
        this.sett = sett;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getCountt() {
        return countt;
    }

    public void setCountt(int countt) {
        this.countt = countt;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }
}
