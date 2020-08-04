package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void insertUser(User user) {
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
}
