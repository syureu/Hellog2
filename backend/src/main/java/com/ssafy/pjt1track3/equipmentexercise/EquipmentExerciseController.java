package com.ssafy.pjt1track3.equipmentexercise;

import com.ssafy.pjt1track3.equipment.EquipmentService;
import com.ssafy.pjt1track3.gym.GymService;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/equipmentexercises")
public class EquipmentExerciseController {

    private EquipmentExerciseService equipmentExerciseService;
    private EquipmentService equipmentService;
    private GymService gymService;
    private UserService userService;

    public EquipmentExerciseController(
            final EquipmentExerciseService equipmentExerciseService,
            final EquipmentService equipmentService,
            final GymService gymService,
            final UserService userService) {
        this.equipmentExerciseService = equipmentExerciseService;
        this.equipmentService = equipmentService;
        this.gymService = gymService;
        this.userService = userService;
    }

    @PostMapping("/equipmentexercise")
    public ResponseEntity<String> createEquipmentExercise(@RequestBody EquipmentExercise equipmentExercise, Principal principal) {
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
    }

    @GetMapping("/{eeId}")
    public ResponseEntity<EquipmentExercise> readEquipmentExercise(@PathVariable Long eeId) {
        EquipmentExercise equipmentExercise = equipmentExerciseService.selectEquipmentExercise(eeId);
        if (equipmentExercise != null) {
            return new ResponseEntity<>(equipmentExercise, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{eeId}")
    public ResponseEntity<String> updateEquipmentExercise(@PathVariable Long eeId, @RequestBody EquipmentExercise equipmentExercise, Principal principal) {
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
    }

    @DeleteMapping("/{eeId}")
    public ResponseEntity<String> deleteEquipmentExercise(@PathVariable Long eeId, Principal principal) {
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
    }
}
