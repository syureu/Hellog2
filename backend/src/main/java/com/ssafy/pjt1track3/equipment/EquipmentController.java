package com.ssafy.pjt1track3.equipment;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.ssafy.pjt1track3.util.Util.isAdmin;
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
@RequestMapping("/api/equipments")
@Api(
        tags = {"Equipment"},
        description = "운동기구"
)
public class EquipmentController {

    private EquipmentService equipmentService;

    public EquipmentController(final EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @PostMapping("/equipment")
    @ApiOperation(value = "운동기구 하나를 입력요청합니다.")
    public ResponseEntity<String> createEquipment(@RequestBody Equipment equipment, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        if(equipment.getGymId() == null) {
            // 어느 헬스장 소속 기구인지에 대한 정보가 없다면
            // 잘못된 json 요청
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if(isAdmin(principal)) {
            // 관리자의 요청
            // 바로 처리
            equipmentService.insertEquipment(equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 관리자가 아닌 유저의 요청인 경우
            // 로그인한 유저가 삽입 요청된 기구가 속한 헬스장의 대표 코치인지 확인해야 함
            String username = equipmentService.selectUsernameByEquipment(equipment);
            if(username.equals(principal.getName())) {
                // 일치한다면 => 대표코치
                // 옳은 요청
                equipmentService.insertEquipment(equipment);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일치하지 않는다면
                // 타인의 명의의 헬스장 운동기구 작성 시도
                // 권한 밖, 클라이언트 요청 확인
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if (isAdmin(principal) || isOwnGym(equipment.getGymId(), principal)) {
            equipmentService.insertEquipment(equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/{equipmentId}")
    @ApiOperation(value = "운동기구 하나를 운동기구 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Equipment> readEquipment(@PathVariable Long equipmentId) {
        // 자신이 소속된 헬스장의 운동기구만 보게 하는것이 맞을지
        // 우선 권한 관계없이 전체 확인이 가능하도록 작성
        Equipment equipment = equipmentService.selectEquipment(equipmentId);
        if (equipment != null) {
            return new ResponseEntity<>(equipment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{equipmentId}")
    @ApiOperation(value = "운동기구 하나를 운동기구 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateEquipment(@PathVariable Long equipmentId, @RequestBody Equipment requestEquipment, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        Equipment originEquipment = equipmentService.selectEquipment(equipmentId);
        if(originEquipment==null) {
            // 수정 요청한 기구 번호가 존재하지 않기 때문에
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if (isAdmin(principal)) {
            // 관리자의 요청이라면
            // 바로 처리
            equipmentService.updateEquipment(equipmentId, requestEquipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 관리자가 아닌 유저의 요청인 경우
            // 로그인한 유저가 수정 요청된 기구가 속한 헬스장의 대표 코치인지 확인해야 함
            String username = equipmentService.selectUsernameByEquipment(originEquipment);
            if(username.equals(principal.getName())) {
                // 일치한다면 => 대표코치
                // 옳은 요청
                equipmentService.updateEquipment(equipmentId, requestEquipment);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일치하지 않는다면
                // 타인의 명의의 헬스장 운동기구 수정 시도
                // 권한 밖, 클라이언트 요청 확인
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if (isAdmin(principal) || isOwnGym(equipment.getGymId(), principal)) {
            equipmentService.updateEquipment(equipmentId, equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @DeleteMapping("/{equipmentId}")
    @ApiOperation(value = "운동기구 하나를 운동기구 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteEquipment(@PathVariable Long equipmentId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        Equipment originEquipment = equipmentService.selectEquipment(equipmentId);
        if(originEquipment==null) {
            // 삭제 요청한 기구 번호가 존재하지 않기 때문에
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if (isAdmin(principal)) {
            // 관리자의 요청이라면
            // 바로 처리
            equipmentService.deleteEquipment(equipmentId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 관리자가 아닌 유저의 요청인 경우
            // 로그인한 유저가 삭제 요청된 기구가 속한 헬스장의 대표 코치인지 확인해야 함
            String username = equipmentService.selectUsernameByEquipment(originEquipment);
            if(username.equals(principal.getName())) {
                // 일치한다면 => 대표코치
                // 옳은 요청
                equipmentService.deleteEquipment(equipmentId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 일치하지 않는다면
                // 타인의 명의의 헬스장 운동기구 삭제 시도
                // 권한 밖, 클라이언트 요청 확인
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        if (isAdmin(principal) || isOwnGym(equipmentService.selectEquipment(equipmentId).getGymId(), principal)) {
            equipmentService.deleteEquipment(equipmentId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }
}
