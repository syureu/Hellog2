package com.ssafy.pjt1track3.record;

import java.util.Date;

public class Record {
    private Long recordId;
    private Long id;
    private Long equipmentExerciseId;
    private int set;
    private String weight;
    private int count;
    private Date startTime;
    private Date endTime;

    public Record(Long recordId, Long id, Long equipmentExerciseId, int set, String weight, int count, Date startTime, Date endTime) {
        this.recordId = recordId;
        this.id = id;
        this.equipmentExerciseId = equipmentExerciseId;
        this.set = set;
        this.weight = weight;
        this.count = count;
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

    public int getSet() {
        return set;
    }

    public void setSet(int set) {
        this.set = set;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
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
