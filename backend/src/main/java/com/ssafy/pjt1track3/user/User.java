package com.ssafy.pjt1track3.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Date birthday;
    @Column(nullable = false)
    private String phone;
    @Column(nullable = false)
    private boolean male;
    @Column(nullable = false)
    private Date signUpDay;
    @Column(nullable = false)
    private int height;
    @Column(nullable = false)
    private int weight;
    @Column(nullable = false)
    private Date limitPermitDay;
    private Long coachId;
    private Long gymId;
    @Column(nullable = false)
    private int active;

    private String roles = "";
    private String permissions = "";

    public User(Long id, String username, String password, String name, Date birthday, String phone, boolean male, Date signUpDay, int height, int weight, Long gymId, Long coachId, int active, Date limitPermitDay, String roles, String permissions) {
        this.id = id;
        this.username =username;
        this.password=password;
        this.name=name;
        this.birthday = birthday;
        this.phone=phone;
        this.male=male;
        this.signUpDay=signUpDay;
        this.height=height;
        this.weight=weight;
        this.gymId=gymId;
        this.coachId=coachId;
        this.active=active;
        this.limitPermitDay=limitPermitDay;
        this.roles=roles;
        this.permissions=permissions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isMale() {
        return male;
    }

    public void setMale(boolean male) {
        this.male = male;
    }

    public Date getSignUpDay() {
        return signUpDay;
    }

    public void setSignUpDay(Date signUpDay) {
        this.signUpDay = signUpDay;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Date getLimitPermitDay() {
        return limitPermitDay;
    }

    public void setLimitPermitDay(Date limitPermitDay) {
        this.limitPermitDay = limitPermitDay;
    }

    public Long getCoachId() {
        return coachId;
    }

    public void setCoachId(Long coachId) {
        this.coachId = coachId;
    }

    public Long getGymId() {
        return gymId;
    }

    public void setGymId(Long gymId) {
        this.gymId = gymId;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getPermissions() {
        return permissions;
    }

    public void setPermissions(String permissions) {
        this.permissions = permissions;
    }

    public List<String> getRoleList() {
        if (this.roles.length() > 0) {
            return Arrays.asList(this.roles.split(","));
        }

        return new ArrayList<>();
    }

    public List<String> getPermissionList() {
        if (this.permissions.length() > 0) {
            return Arrays.asList(this.permissions.split(","));
        }

        return new ArrayList<>();
    }
}
