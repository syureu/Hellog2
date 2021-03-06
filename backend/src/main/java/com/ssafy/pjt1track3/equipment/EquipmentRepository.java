package com.ssafy.pjt1track3.equipment;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EquipmentRepository {
    void insertEquipment(Equipment equipment);
    Equipment selectEquipment(Long equipmentId);
    void updateEquipment(Equipment equipment);
    void deleteEquipment(Long equipmentId);
}
