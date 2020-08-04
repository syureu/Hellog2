package com.ssafy.pjt1track3.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    User findByUsername(String username);
    void insertUser(User user);
    User selectUser(Long Id);
    void updateUser(User user);
    void deleteUser(Long Id);
    void deleteAll();
}
