package com.ssafy.pjt1track3.record;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

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
}
