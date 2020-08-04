package com.ssafy.pjt1track3.gym;

public class Gym {
    private Long gymId;
    private String name;
    private String location;
    private String phone;
    private Long representative;

    public Gym(String name, String location, String phone, Long representative) {
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
