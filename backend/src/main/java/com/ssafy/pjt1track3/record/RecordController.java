package com.ssafy.pjt1track3.record;

import com.ssafy.pjt1track3.user.User;
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
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
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
    @ApiOperation(value = "운동기록 하나를 입력 요청합니다.")
    public ResponseEntity<String> createRecord(@RequestBody Record record, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
        Long requestRecordId = record.getId();
        if (requestRecordId == null) {
            // Request Body의 Record에 참조하는 id가 누락된 경우
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        boolean isAdminFlag = isAdmin(principal);
        User requestUserOfRecordId = recordService.selectUserById(requestRecordId);
        if (requestUserOfRecordId == null) {
            if (isAdminFlag) {

                // 관리자의 요청인데 Request Body의 Record에 참조하는 id로 검색된 사람이 없는 경우
                // 즉 등록되지 않은 회원 번호에 기록을 입력하려고 시도한 경우이므로
                // 없는 회원 번호를 참조하려고 했음
                return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
            } else {
                // 일반 유저의 요청인데 Request Body의 Record에 참조하는 id로 검색된 사람이 없는 경우
                // 즉 타인의 명의(없는 유저 정보)로 된 기록을 입력하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            if (requestUserOfRecordId.getUsername().equals(principal.getName()) || isAdminFlag) {
                // 로그인한 유저와 요청된 운동기록상의 유저가 같은 경우 (자기 자신에 대한 입력) - 유효한 입력
                // 혹은 관리자가 운동기록 입력을 요청한 경우 - 유효한 입력
                // 유효한 요청이므로 insertRecord 서비스 실행 후 200
                recordService.insertRecord(record);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저의 요청인데 Request Body의 Record에 참조하는 id로 검색된 사람이 없거나 타인인 경우
                // 즉 타인의 명의로 된 기록을 입력하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
    }

    @GetMapping("/{recordId}")
    @ApiOperation(value = "운동기록 하나를 운동기록 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Record> readRecord(@PathVariable Long recordId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        boolean isAdminFlag = isAdmin(principal);
        User requestUserOfRecordId = recordService.selectUserByRecordId(recordId);
        if (requestUserOfRecordId == null) {
            if (isAdminFlag) {
                // 관리자의 요청
                // 등록되지 않은 회원 번호를 조회 시도한 경우이므로 204
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 없는 유저 요청)로 된 기록을 입력하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
            }
        } else {
            if (requestUserOfRecordId.getUsername().equals(principal.getName()) || isAdminFlag) {
                // 로그인한 유저와 요청된 운동기록상의 유저가 같은 경우 (자기 자신의 운동기록 열람 요청) - 유효한 입력
                // 혹은 관리자가 운동기록 열람 ㄴ요청의 경우 - 유효한 입력
                // 유효한 요청이므로 record와 200
                return new ResponseEntity<>(recordService.selectRecord(recordId), HttpStatus.OK);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 있는 유저 요청)로 된 기록을 입력하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
            }
        }
    }

    @PutMapping("/{recordId}")
    @ApiOperation(value = "운동기록 하나를 운동기록 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateRecord(@PathVariable Long recordId, @RequestBody Record record, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        boolean isAdminFlag = isAdmin(principal);
        User requestUserOfRecordId = recordService.selectUserByRecordId(recordId);
        if (requestUserOfRecordId == null) {
            if (isAdminFlag) {
                // 관리자의 요청
                // 등록되지 않은 회원 번호를 수정 시도한 경우이므로 204
                return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 없는 유저 요청)로 된 기록을 수정하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트 측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            if (requestUserOfRecordId.getUsername().equals(principal.getName()) || isAdminFlag) {
                // 로그인한 유저와 요청된 운동기록상의 유저가 같은 경우 (자기 자신의 운동기록 수정 요청) - 유효한 입력
                // 혹은 관리자가 운동기록 수정 요청의 경우 - 유효한 입력
                // 유효한 요청이므로 updateRecord 처리 후 200
                recordService.updateRecord(recordId, record);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 있는 유저 요청)로 된 기록을 수정하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
    }

    @DeleteMapping("/{recordId}")
    @ApiOperation(value = "운동기록 하나를 운동기록 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteRecord(@PathVariable Long recordId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        boolean isAdminFlag = isAdmin(principal);
        User requestUserOfRecordId = recordService.selectUserByRecordId(recordId);
        if (requestUserOfRecordId == null) {
            if (isAdminFlag) {
                // 관리자의 요청
                // 등록되지 않은 회원 번호를 삭제 시도한 경우이므로 204
                return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 없는 유저 요청)로 된 기록을 삭제하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트 측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        } else {
            if (requestUserOfRecordId.getUsername().equals(principal.getName()) || isAdminFlag) {
                // 로그인한 유저와 요청된 운동기록상의 유저가 같은 경우 (자기 자신의 운동기록 삭제 요청) - 유효한 입력
                // 혹은 관리자가 운동기록 삭제 요청의 경우 - 유효한 입력
                // 유효한 요청이므로 deleteRecord 처리 후 200
                recordService.deleteRecord(recordId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일반 유저의 요청
                // 타인의 명의(이 경우는 있는 유저 요청)로 된 기록을 삭제하려고 시도한 경우이므로 권한적 금지
                // 그리고 이 경우 클라이언트측에서 잘못된 입력을 만들고 있을 것으로 예상됨
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
    }

    @GetMapping("/myrecord")
    @ApiOperation(value = "로그인한 유저의 모든 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyRecordList(Principal principal) {
        if (!isLoggedIn(principal)) {
            //로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        List<Record> list = recordService.selectRecordByUsername(principal.getName());
        if (list.size() > 0) {
            // 결과 있을 때
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            // 결과 없을 때
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/myrecord/today")
    @ApiOperation(value = "로그인한 유저의 오늘자 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyTodayRecordList(Principal principal) {
        if (!isLoggedIn(principal)) {
            //로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        List<Record> list = recordService.selectTodayRecordByUsername(principal.getName());
        if (list.size() > 0) {
            // 결과 있을 때
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            // 결과 없을 때
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/myrecord/equipment/{equipmentId}")
    @ApiOperation(value = "로그인한 유저가 지정한 운동기구에서 했던 운동기록들을 열람 요청합니다.")
    public ResponseEntity<List<Record>> readMyRecordListByEquipmentId(@PathVariable Long equipmentId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        List<Record> list = recordService.selectRecordByUsernameAndEquipmentId(principal.getName(), equipmentId);
        if (list.size() > 0) {
            // 결과 있을 때
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            // 결과 없을 때
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/myrecord/v2")
    @ApiOperation(value = "로그인한 유저의 모든 운동기록들을 열람 요청합니다.\n" +
            "캘린더에 올릴 수 있도록 제작된 api 입니다.")
    public ResponseEntity<List<RecordV2Dto>> readMyRecordListV2(Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안했을 때
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        List<RecordV2Dto> list = recordService.selectRecordByUsernameV2(principal.getName());
        if (list.size() > 0) {
            // 결과 있을 때
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            // 결과 없을 때
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
}
