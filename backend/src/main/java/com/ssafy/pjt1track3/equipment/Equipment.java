package com.ssafy.pjt1track3.equipment;

import io.swagger.annotations.ApiModelProperty;

public class Equipment {
    @ApiModelProperty(
            value = "운동기구 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long equipmentId;
    @ApiModelProperty(
            value = "헬스장(의 gymId)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long gymId;
    @ApiModelProperty(
            value = "운동기구의 이름",
            required = true,
            example = "벤치프레스머신 1번",
            hidden = false
    )
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
