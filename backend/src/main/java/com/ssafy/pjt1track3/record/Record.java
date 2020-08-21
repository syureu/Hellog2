package com.ssafy.pjt1track3.record;

import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

public class Record {
    @ApiModelProperty(
            value = "운동기록 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long recordId;
    @ApiModelProperty(
            value = "누구(의 id)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long id;
    @ApiModelProperty(
            value = "어떤 운동기구의 어떤 운동(의 equipmentExerciseId)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long equipmentExerciseId;
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

    public Record(Long recordId, Long id, Long equipmentExerciseId, int sett, int weight, int countt, Date startTime, Date endTime) {
        this.recordId = recordId;
        this.id = id;
        this.equipmentExerciseId = equipmentExerciseId;
        this.sett = sett;
        this.weight = weight;
        this.countt = countt;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Long getRecordId() {
        return recordId;
    }

    public void setRecordId(Long recordId) {
        this.recordId = recordId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEquipmentExerciseId() {
        return equipmentExerciseId;
    }

    public void setEquipmentExerciseId(Long equipmentExerciseId) {
        this.equipmentExerciseId = equipmentExerciseId;
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
