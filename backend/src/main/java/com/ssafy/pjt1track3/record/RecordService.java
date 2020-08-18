package com.ssafy.pjt1track3.record;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordService {

    private RecordRepository recordRepository;
    private UserRepository userRepository;

    public RecordService(final RecordRepository recordRepository, final UserRepository userRepository) {
        this.recordRepository = recordRepository;
        this.userRepository = userRepository;
    }

    public User selectUserById(Long id) {
        return userRepository.selectUser(id);
    }

    public void insertRecord(Record record) {
        recordRepository.insertRecord(record);
    }

    public User selectUserByRecordId(Long recordId) {
        return userRepository.selectUser(recordRepository.selectRecord(recordId).getId());
    }

    public Record selectRecordByRecordId(Long recordId) {
        return recordRepository.selectRecord(recordId);
    }

    public void updateRecord(Long recordId, Record record) {
        record.setRecordId(recordId);
        recordRepository.updateRecord(record);
    }

    public void deleteRecord(Long recordId) {
        recordRepository.deleteRecord(recordId);
    }

    public List<Record> selectRecordByUsername(String name) {
        return recordRepository.selectRecordByUsername(name);
    }
    public List<Record> selectTodayRecordByUsername(String name) {
        return recordRepository.selectTodayRecordByUsername(name);
    }

    public List<Record> selectRecordByUsernameAndEquipmentId(String name, Long equipmentId) {
        return recordRepository.selectRecordByUsernameAndEquipmentId(new UserEquipmentDto(name, equipmentId));
    }

    public List<Record> selectRecordByUsernameV2(String name) {
        return recordRepository.selectRecordByUsernameV2(name);
    }
}
