package com.ssafy.pjt1track3.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    int insertUser(User user);
    User selectUser(String id);
    int updateUser(User user);
    int deleteUser(String id);
}
