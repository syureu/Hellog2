package com.ssafy.pjt1track3.gym;

import io.swagger.annotations.ApiModelProperty;

public class Gym {
    @ApiModelProperty(
            value = "헬스장 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long gymId;
    @ApiModelProperty(
            value = "헬스장 이름",
            required = true,
            example = "골드짐헬스 구미인동점",
            hidden = false
    )
    private String name;
    @ApiModelProperty(
            value = "헬스장 이름",
            required = true,
            example = "경상북도 구미시 인동가산로 35",
            hidden = false
    )
    private String location;
    @ApiModelProperty(
            value = "헬스장 전화번호",
            required = true,
            example = "054-473-6622",
            hidden = false
    )
    private String phone;
    @ApiModelProperty(
            value = "헬스장 대표코치(의 id)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long representative;

    public Gym(Long gymId, String name, String location, String phone, Long representative) {
        this.gymId = gymId;
        this.name = name;
        this.location = location;
        this.phone = phone;
        this.representative = representative;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Long getRepresentative() {
        return representative;
    }

    public void setRepresentative(Long representative) {
        this.representative = representative;
    }
}
