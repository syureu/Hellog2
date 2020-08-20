package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(final UserRepository userRepository, final PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void insertUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setSignUpDay(new Date());
        user.setActive(1);
        user.setRoles("USER");
        user.setPermissions("");
        user.setLimitPermitDay(new Date(2030, Calendar.JANUARY, 1));
        userRepository.insertUser(user);
    }

    public User selectUser(Long userId) {
        return userRepository.selectUser(userId);
    }

    public void updateUser(Long userId, User user) {
        user.setId(userId);
        userRepository.updateUser(user);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteUser(userId);
    }

    public List<String> selectRoleListByUsername(String username) {
        return userRepository.selectUserByUsername(username).getRoleList();
    }

    public User selectUserByUsername(String name) {
        return userRepository.selectUserByUsername(name);
    }
}
