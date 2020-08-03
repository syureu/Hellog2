package com.ssafy.pjt1track3.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    public User findByUsername(String username);
    public void insertUser(User user);
    public User selectUser(Long Id);
    public void updateUser(User user);
    public void deleteUser(Long Id);
    public void deleteAll();
}
