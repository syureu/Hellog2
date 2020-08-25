package com.ssafy.pjt1track3.equipment;

import com.ssafy.pjt1track3.gym.Gym;
import com.ssafy.pjt1track3.gym.GymService;
import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.stereotype.Service;

@Service
public class EquipmentService {

    private EquipmentRepository equipmentRepository;
    private GymService gymService;
    private UserService userService;

    public EquipmentService(final EquipmentRepository equipmentRepository, final GymService gymService, final UserService userService) {
        this.equipmentRepository = equipmentRepository;
        this.gymService = gymService;
        this.userService = userService;
    }

    public void insertEquipment(Equipment equipment) {
        equipmentRepository.insertEquipment(equipment);
    }

    public Equipment selectEquipment(Long equipmentId) {
        return equipmentRepository.selectEquipment(equipmentId);
    }

    public void updateEquipment(long equipmentId, Equipment equipment) {
        equipment.setEquipmentId(equipmentId);
        equipmentRepository.updateEquipment(equipment);
    }

    public void deleteEquipment(Long equipmentId) {
        equipmentRepository.deleteEquipment(equipmentId);
    }

    public String selectUsernameByEquipment(Equipment equipment) {
        Gym gym = gymService.selectGym(equipment.getGymId());
        User user = userService.selectUser(gym.getRepresentative());
        return user.getUsername();
    }
}
