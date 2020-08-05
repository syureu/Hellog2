package com.ssafy.pjt1track3.equipment;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EquipmentRepository {
    void insertEquipment(Equipment equipment);
}
