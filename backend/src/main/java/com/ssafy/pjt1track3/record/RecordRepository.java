package com.ssafy.pjt1track3.record;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RecordRepository {
    void insertRecord(Record record);
    Record selectRecord(Long recordId);
}
