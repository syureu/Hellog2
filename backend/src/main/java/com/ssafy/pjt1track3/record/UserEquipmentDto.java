package com.ssafy.pjt1track3.record;

public class UserEquipmentDto {
    String username;
    Long equipmentId;

    public UserEquipmentDto(String username, Long equipmentId) {
        this.username = username;
        this.equipmentId = equipmentId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }
}
