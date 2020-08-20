package com.ssafy.pjt1track3.gym;

import com.ssafy.pjt1track3.equipment.Equipment;
import com.ssafy.pjt1track3.user.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GymRepository {
    void insertGym(Gym gym);
    Gym selectGym(Long gymId);
    void updateGym(Gym gym);
    void deleteGym(Long gymId);
    List<String> selectGymRepresentativeUsernameByGymId(Long gymId);
    List<Equipment> selectGymEquipmentsListByUsername(String name);
    Gym selectGymByRepresentative(Long representative);
}