package com.ssafy.pjt1track3.record;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RecordRepository {
    void insertRecord(Record record);
    Record selectRecord(Long recordId);
    void updateRecord(Record record);
    void deleteRecord(Long recordId);
    List<Record> selectRecordByUsername(String name);
    List<Record> selectTodayRecordByUsername(String name);
    List<Record> selectRecordByUsernameAndEquipmentId(UserEquipmentDto userEquipmentDto);
}
