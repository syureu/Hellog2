package com.ssafy.pjt1track3.record;

import java.util.Date;

public class Record {
    private Long recordId;
    private Long id;
    private Long equipmentExerciseId;
    private int sett;
    private String weight;
    private int countt;
    private Date startTime;
    private Date endTime;

    public Record(Long recordId, Long id, Long equipmentExerciseId, int sett, String weight, int countt, Date startTime, Date endTime) {
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

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
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
