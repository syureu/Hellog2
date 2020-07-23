package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public int insertUser(User user) {
        return userRepository.insertUser(user);
    }

    public User selectUser(String id) {
        return userRepository.selectUser(id);
    }

    public int updateUser(User user) {
        return userRepository.updateUser(user);
    }

    public int deleteUser(String id) {
        return userRepository.deleteUser(id);
    }
}
