package com.ssafy.pjt1track3.equipmentexercise;

import com.ssafy.pjt1track3.equipment.EquipmentService;
import com.ssafy.pjt1track3.gym.GymService;
import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;
import static com.ssafy.pjt1track3.util.Util.isLoggedIn;

@RestController
@RequestMapping("/api/equipmentexercises")
@Api(
        tags = {"EquipmentExercise"},
        description = "운동기구에서 할 수 있는 운동목록"
)
public class EquipmentExerciseController {

    private EquipmentExerciseService equipmentExerciseService;

    public EquipmentExerciseController(
            final EquipmentExerciseService equipmentExerciseService) {
        this.equipmentExerciseService = equipmentExerciseService;
    }

    @PostMapping("/equipmentexercise")
    @ApiOperation(value = "\"운동기구에서 할 수 있는 운동목록\" 하나를 입력요청합니다.")
    public ResponseEntity<String> createEquipmentExercise(@RequestBody EquipmentExercise equipmentExercise, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        if (isAdmin(principal)) {
            // 관리자라면 바로 처리
            equipmentExerciseService.insertEquipmentExercise(equipmentExercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 관리자가 아닌 유저라면
            // 로그인된 유저가 해당 운동기구가 소속된 헬스장 대표코치인지 알아야 함
            String username = equipmentExerciseService.selectUsernameByEquipmentExercise(equipmentExercise);
            if (username.equals(principal.getName())) {
                // 로그인한 유저가 해당 헬스장의 대표코치라면
                // 옳은 요청이기에 처리
                equipmentExerciseService.insertEquipmentExercise(equipmentExercise);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 해당 헬스장 대표코치가 아니면
                // 권한 밖, 클라이언트 확인
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }

        /*
        // 지금 리퀘스트들어온 기구로 할 수 있는 운동 의 운동기구를 타고
        // 그 운동기구가 소속된 헬스장을 타고
        // 그 헬스장의 대표코치의 username이 뭔지 알아야 됨
        // 헬스장 대표코치 혹은 관리자면 OK
        List<String> representative = gymService.selectGymRepresentativeUsernameByGymId(
                equipmentService.selectEquipment(
                        equipmentExercise.getEquipmentId())
                        .getGymId());
        if (representative.contains(principal.getName()) || isAdmin(principal)) {
            equipmentExerciseService.insertEquipmentExercise(equipmentExercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        }
        // 아니라면 포비든
        else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/{eeId}")
    @ApiOperation(value = "\"운동기구에서 할 수 있는 운동목록\" 하나를 운동기구별 운동목록 번호를 통해 열람 요청합니다.")
    public ResponseEntity<EquipmentExercise> readEquipmentExercise(@PathVariable Long eeId) {
        EquipmentExercise equipmentExercise = equipmentExerciseService.selectEquipmentExercise(eeId);
        if (equipmentExercise != null) {
            return new ResponseEntity<>(equipmentExercise, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{eeId}")
    @ApiOperation(value = "\"운동기구에서 할 수 있는 운동목록\" 하나를 운동기구별 운동목록 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateEquipmentExercise(@PathVariable Long equipmentExerciseId, @RequestBody EquipmentExercise requestEquipmentExercise, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        EquipmentExercise originEquipmentExercise = equipmentExerciseService.selectEquipmentExercise(equipmentExerciseId);
        if (originEquipmentExercise == null) {
            // 존재하지 않는 운동기구별 운동목록을 수정 시도했을 때
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if (isAdmin(principal)) {
            // 관리자의 요청
            // 바로 처리
            equipmentExerciseService.updateEquipmentExercise(equipmentExerciseId, requestEquipmentExercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 일반 유저의 요청이라면
            // 로그인한 유저가 해당 운동기구가 소속된 헬스장의 대표코치인지 확인해야 함
            String username = equipmentExerciseService.selectUsernameByEquipmentExercise(originEquipmentExercise);
            if (username.equals(principal.getName())) {
                // 로그인한 유저가 헬스장의 대표 코치라면
                // 옳은 요청이므로 처리
                equipmentExerciseService.updateEquipmentExercise(equipmentExerciseId, requestEquipmentExercise);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 헬스장의 대표코치가 아니라면
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        List<String> representative = gymService.selectGymRepresentativeUsernameByGymId(
                equipmentService.selectEquipment(
                        equipmentExercise.getEquipmentId())
                        .getGymId());
        if (representative.contains(principal.getName()) || isAdmin(principal)) {
            equipmentExerciseService.updateEquipmentExercise(eeId, equipmentExercise);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @DeleteMapping("/{eeId}")
    @ApiOperation(value = "\"운동기구에서 할 수 있는 운동목록\" 하나를 운동기구별 운동목록 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteEquipmentExercise(@PathVariable Long equipmentExerciseId, Principal principal) {
        if (!isLoggedIn(principal)) {
            // 로그인 안 했을 때
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        }
        EquipmentExercise originEquipmentExercise = equipmentExerciseService.selectEquipmentExercise(equipmentExerciseId);
        if (originEquipmentExercise == null) {
            // 존재하지 않는 운동기구별 운동목록을 삭제 시도했을 때
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
        if (isAdmin(principal)) {
            // 관리자의 요청
            // 바로 처리
            equipmentExerciseService.deleteEquipmentExercise(equipmentExerciseId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            // 일반 유저의 요청이라면
            // 로그인한 유저가 해당 운동기구가 소속된 헬스장의 대표코치인지 확인해야 함
            String username = equipmentExerciseService.selectUsernameByEquipmentExercise(originEquipmentExercise);
            if (username.equals(principal.getName())) {
                // 로그인한 유저가 헬스장의 대표 코치라면
                // 옳은 요청이므로 처리
                equipmentExerciseService.deleteEquipmentExercise(equipmentExerciseId);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else {
                // 헬스장의 대표코치가 아니라면
                // 권한 밖, 클라이언트 점검
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        /*
        List<String> representative = gymService.selectGymRepresentativeUsernameByGymId(
                equipmentService.selectEquipment(
                        equipmentExerciseService.selectEquipmentExercise(eeId).getEquipmentId())
                        .getGymId());
        if (representative.contains(principal.getName()) || isAdmin(principal)) {
            equipmentExerciseService.deleteEquipmentExercise(eeId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
         */
    }

    @GetMapping("/equipment/{equipmentId}")
    public ResponseEntity<List<EquipmentExerciseAndExerciseDto>> readEquipmentExerciseAndExerciseListByEquipmentId(@PathVariable Long equipmentId) {
        List<EquipmentExerciseAndExerciseDto> list = equipmentExerciseService.selectEquipmentExerciseAndExerciseListByEquipmentId(equipmentId);
        if (list.size() > 0) {
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }
}
