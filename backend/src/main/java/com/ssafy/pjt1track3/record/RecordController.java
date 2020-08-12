package com.ssafy.pjt1track3.record;

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
public class RecordController {

    private RecordService recordService;

    public RecordController(final RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping("/record")
    public ResponseEntity<String> createRecord(@RequestBody Record record, Principal principal) {
        if (recordService.selectUserById(record.getId()).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.insertRecord(record);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{recordId}")
    public ResponseEntity<Record> readRecord(@PathVariable Long recordId, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            return new ResponseEntity<>(recordService.selectRecordByRecordId(recordId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/{recordId}")
    public ResponseEntity<String> updateRecord(@PathVariable Long recordId, @RequestBody Record record, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.updateRecord(recordId, record);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{recordId}")
    public ResponseEntity<String> deleteRecord(@PathVariable Long recordId, Principal principal) {
        if (recordService.selectUserByRecordId(recordId).getUsername().equals(principal.getName()) || isAdmin(principal)) {
            recordService.deleteRecord(recordId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/myrecord")
    public ResponseEntity<List<Record>> readMyRecordList(Principal principal) {
        return new ResponseEntity<>(recordService.selectRecordByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/myrecord/today")
    public ResponseEntity<List<Record>> readMyTodayRecordList(Principal principal) {
        return new ResponseEntity<>(recordService.selectTodayRecordByUsername(principal.getName()), HttpStatus.OK);
    }
}
