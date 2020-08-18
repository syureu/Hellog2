package com.ssafy.pjt1track3.record;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/records")
@Api(
        tags = {"Record"},
        description = "운동기록"
)
public class RecordController {

    private RecordService recordService;

    public RecordController(final RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping("/record")
    @ApiOperation(value="운동기록 하나를 입력 요청합니다.")
    public ResponseEntity<String> createRecord(@RequestBody Record record, Principal principal) {
        if (recordService.selectUserById(record.getId()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.insertRecord(record);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{recordId}")
    @ApiOperation(value="운동기록 하나를 운동기록 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Record> readRecord(@PathVariable Long recordId, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            return new ResponseEntity<>(recordService.selectRecordByRecordId(recordId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/{recordId}")
    @ApiOperation(value="운동기록 하나를 운동기록 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateRecord(@PathVariable Long recordId, @RequestBody Record record, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.updateRecord(recordId, record);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{recordId}")
    @ApiOperation(value="운동기록 하나를 운동기록 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteRecord(@PathVariable Long recordId, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.deleteRecord(recordId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/myrecord")
    @ApiOperation(value="로그인한 유저의 모든 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyRecordList(Principal principal) {
        return new ResponseEntity<>(recordService.selectRecordByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/myrecord/today")
    @ApiOperation(value="로그인한 유저의 오늘자 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyTodayRecordList(Principal principal) {
        return new ResponseEntity<>(recordService.selectTodayRecordByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/myrecord/equipment/{equipmentId}")
    @ApiOperation(value="로그인한 유저가 지정한 운동기구에서 했던 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyRecordListByEquipmentId(@PathVariable Long equipmentId, Principal principal) {
        return new ResponseEntity<>(recordService.selectRecordByUsernameAndEquipmentId(principal.getName(), equipmentId),HttpStatus.OK);
    }

    @GetMapping("/myrecord/v2")
    @ApiOperation(value="로그인한 유저의 모든 운동기록들을 열람 요청합니다.\n" +
            "캘린더에 올릴 수 있도록 제작된 api 입니다.")
    public ResponseEntity<List<RecordV2Dto>> readMyRecordListV2(Principal principal) {
        return new ResponseEntity<>(recordService.selectRecordByUsernameV2(principal.getName()), HttpStatus.OK);
    }
}
