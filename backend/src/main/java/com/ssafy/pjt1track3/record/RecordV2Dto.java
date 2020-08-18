package com.ssafy.pjt1track3.record;

import java.util.Date;

public class RecordV2Dto {
    private String exerciseName;
    private int sett;
    private int weight;
    private int countt;
    private Date startTime;
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
