package com.ssafy.pjt1track3.equipmentexercise;

import com.ssafy.pjt1track3.equipment.Equipment;
import com.ssafy.pjt1track3.equipment.EquipmentService;
import com.ssafy.pjt1track3.gym.Gym;
import com.ssafy.pjt1track3.gym.GymService;
import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentExerciseService {

    private EquipmentExerciseRepository equipmentExerciseRepository;
    private EquipmentService equipmentService;

    public EquipmentExerciseService(final EquipmentExerciseRepository equipmentExerciseRepository,
                                    final EquipmentService equipmentService) {
        this.equipmentExerciseRepository = equipmentExerciseRepository;
        this.equipmentService = equipmentService;
    }

    public void insertEquipmentExercise(EquipmentExercise equipmentExercise) {
        equipmentExerciseRepository.insertEquipmentExercise(equipmentExercise);
    }

    public EquipmentExercise selectEquipmentExercise(Long eeId) {
        return equipmentExerciseRepository.selectEquipmentExercise(eeId);
    }

    public void updateEquipmentExercise(Long eeId, EquipmentExercise equipmentExercise) {
        equipmentExercise.setEquipmentExerciseId(eeId);
        equipmentExerciseRepository.updateEquipmentExercise(equipmentExercise);
    }

    public void deleteEquipmentExercise(Long eeId) {
        equipmentExerciseRepository.deleteEquipmentExercise(eeId);
    }

    public List<EquipmentExerciseAndExerciseDto> selectEquipmentExerciseAndExerciseListByEquipmentId(Long equipmentId) {
        return equipmentExerciseRepository.selectEquipmentExerciseAndExerciseListByEquipmentId(equipmentId);
    }

    public String selectUsernameByEquipmentExercise(EquipmentExercise equipmentExercise) {
        Equipment equipment = equipmentService.selectEquipment(equipmentExercise.getEquipmentId());
        return equipmentService.selectUsernameByEquipment(equipment);

    }
}
