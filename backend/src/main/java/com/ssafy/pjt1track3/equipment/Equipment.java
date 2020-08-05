package com.ssafy.pjt1track3.equipment;

public class Equipment {
    private Long equipmentId;
    private Long gymId;
    private String name;

    public Equipment(Long equipmentId, Long gymId, String name) {
        this.equipmentId = equipmentId;
        this.gymId = gymId;
        this.name = name;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    public Long getGymId() {
        return gymId;
    }

    public void setGymId(Long gymId) {
        this.gymId = gymId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
