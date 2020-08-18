package com.ssafy.pjt1track3.user;

import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(
            value = "회원 정보 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long id;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "로그인시 사용하는 회원 username(DB용 id와 다름)",
            required = true,
            example = "tor012",
            hidden = false
    )
    private String username;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "로그인시 사용하는 회원 비밀번호",
            required = true,
            example = "********",
            hidden = false
    )
    private String password;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 이름",
            required = true,
            example = "김기담",
            hidden = false
    )
    private String name;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 생일",
            required = true,
            example = "1993-10-22T00:00:00.000+09:00",
            hidden = false
    )
    private Date birthday;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 전화번호",
            required = true,
            example = "010-1234-5678",
            hidden = false
    )
    private String phone;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 성별",
            required = true,
            example = "ture",
            hidden = false
    )
    private boolean male;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 가입일",
            required = true,
            example = "2020-07-28T00:00:00.000+09:00",
            hidden = false
    )
    private Date signUpDay;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 키",
            required = true,
            example = "ture",
            hidden = false
    )
    private int height;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 몸무게",
            required = true,
            example = "ture",
            hidden = false
    )
    private int weight;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원이 허가한 약관 허용 일자",
            required = true,
            example = "2025-07-28T00:00:00.000+09:00",
            hidden = false
    )
    private Date limitPermitDay;
    @ApiModelProperty(
            value = "회원의 담당코치(의 id)",
            required = true,
            example = "2",
            hidden = false
    )
    private Long coachId;
    @ApiModelProperty(
            value = "회원이 소속된 헬스장(의 gymId)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long gymId;
    @Column(nullable = false)
    @ApiModelProperty(
            value = "회원의 활성화 여부",
            required = true,
            example = "1",
            hidden = false
    )
    private int active;

    @ApiModelProperty(
            value = "회원의 등급",
            required = true,
            example = "USER",
            hidden = false
    )
    private String roles = "";
    @ApiModelProperty(
            value = "회원의 권한",
            required = true,
            example = "PERMISSION_1, PERMISSION_2",
            hidden = false
    )
    private String permissions = "";

    public User(Long id, String username, String password, String name, Date birthday, String phone, boolean male, Date signUpDay, int height, int weight, Long gymId, Long coachId, int active, Date limitPermitDay, String roles, String permissions) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.phone = phone;
        this.male = male;
        this.signUpDay = signUpDay;
        this.height = height;
        this.weight = weight;
        this.gymId = gymId;
        this.coachId = coachId;
        this.active = active;
        this.limitPermitDay = limitPermitDay;
        this.roles = roles;
        this.permissions = permissions;
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
