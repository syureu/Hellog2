package com.ssafy.pjt1track3.equipment;

import com.ssafy.pjt1track3.gym.GymService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/equipments")
@Api(
        tags = {"Equipment"},
        description = "운동기구"
)
public class EquipmentController {

    private EquipmentService equipmentService;
    private GymService gymService;

    public EquipmentController(final EquipmentService equipmentService, final GymService gymService) {
        this.equipmentService = equipmentService;
        this.gymService = gymService;
    }

    private boolean isOwnGym(Long gymId, Principal principal) {
        if (principal.getName().equals(gymService.selectGymRepresentativeUsernameByGymId(gymId))) {
            return true;
        } else {
            return false;
        }
    }

    @PostMapping("/equipment")
    @ApiOperation(value="운동기구 하나를 입력요청합니다.")
    public ResponseEntity<String> createEquipment(@RequestBody Equipment equipment, Principal principal) {
        if(isAdmin(principal) || isOwnGym(equipment.getGymId(), principal)){
            equipmentService.insertEquipment(equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{equipmentId}")
    @ApiOperation(value="운동기구 하나를 운동기구 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Equipment> readEquipment(@PathVariable Long equipmentId) {
        Equipment equipment = equipmentService.selectEquipment(equipmentId);
        if(equipment != null) {
            return new ResponseEntity<>(equipment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{equipmentId}")
    @ApiOperation(value="운동기구 하나를 운동기구 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateEquipment(@PathVariable Long equipmentId, @RequestBody Equipment equipment, Principal principal) {
        if(isAdmin(principal) || isOwnGym(equipment.getGymId(), principal)){
            equipmentService.updateEquipment(equipmentId, equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{equipmentId}")
    @ApiOperation(value="운동기구 하나를 운동기구 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteEquipment(@PathVariable Long equipmentId, Principal principal){
        if(isAdmin(principal) || isOwnGym(equipmentService.selectEquipment(equipmentId).getGymId(), principal)){
            equipmentService.updateDelete(equipmentId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
