package com.ssafy.pjt1track3.exercise;

public class Exercise {
    private Long exerciseId;
    private String name;
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
