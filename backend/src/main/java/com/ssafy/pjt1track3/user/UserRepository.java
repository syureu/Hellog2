package com.ssafy.pjt1track3.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    public int insertUser(User user);
    public User selectUser(Long Id);
    public int updateUser(User user);
    public int deleteUser(Long Id);
}
