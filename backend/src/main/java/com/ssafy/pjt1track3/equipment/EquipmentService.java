package com.ssafy.pjt1track3.equipment;

import org.springframework.stereotype.Service;

@Service
public class EquipmentService {

    private EquipmentRepository equipmentRepository;

    public EquipmentService(final EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    public void insertEquipment(Equipment equipment) {
        equipmentRepository.insertEquipment(equipment);
    }
}
