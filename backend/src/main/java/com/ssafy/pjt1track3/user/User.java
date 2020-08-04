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
    private int age;
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
    private Long gymId;
    @Column(nullable = false)
    private int active;

    private String roles = "";
    private String permissions = "";

    public User(String username, String password, String name, int age, String phone, boolean male, Date signUpDay, int height, int weight, Date limitPermitDay) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.male = male;
        this.signUpDay = signUpDay;
        this.height = height;
        this.weight = weight;
        this.limitPermitDay = limitPermitDay;
        this.roles = "USER";

        this.active = 1;
    }

    protected User() {
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
