package com.ssafy.pjt1track3.gym;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GymRepository {
    void insertGym(Gym gym);
    Gym selectGym(Long gymId);
    void updateGym(Gym gym);
    void deleteGym(Long gymId);
    String selectGymRepresentativeUsernameByGymId(Long gymId);
}