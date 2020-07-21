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
}
