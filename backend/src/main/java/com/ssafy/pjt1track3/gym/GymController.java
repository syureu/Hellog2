package com.ssafy.pjt1track3.gym;

import com.ssafy.pjt1track3.equipment.Equipment;
import com.ssafy.pjt1track3.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/gyms")
@Api(
        tags = {"Gym"},
        description = "헬스장"
)
public class GymController {

    GymService gymService;

    public GymController(final GymService gymService) {
        this.gymService = gymService;
    }

    private boolean isOwnGym(Long gymId, Principal principal) {
        if (gymService.selectGymRepresentativeUsernameByGymId(gymId).contains(principal.getName())) {
            return true;
        } else {
            return false;
        }
    }

    @PostMapping("/gym")
    @ApiOperation(value="헬스장 하나를 입력 요청합니다.")
    public ResponseEntity<String> createGym(@RequestBody Gym gym, Principal principal) {
        if (isAdmin(principal)) {
            gymService.insertGym(gym);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{gymId}")
    @ApiOperation(value="헬스장 하나를 헬스장 번호를 통해 열람 요청합니다.")
    public ResponseEntity<Gym> readGym(@PathVariable Long gymId) {
        Gym gym = gymService.selectGym(gymId);
        if (gym != null) {
            return new ResponseEntity<>(gym, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(gym, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{gymId}")
    @ApiOperation(value="헬스장 하나를 헬스장 번호를 통해 수정 요청합니다.")
    public ResponseEntity<String> updateGym(@PathVariable Long gymId, @RequestBody Gym gym, Principal principal) {
        if (isAdmin(principal) || isOwnGym(gymId, principal)) {
            gymService.updateGym(gymId, gym);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{gymId}")
    @ApiOperation(value="헬스장 하나를 헬스장 번호를 통해 삭제 요청합니다.")
    public ResponseEntity<String> deleteGym(@PathVariable Long gymId, Principal principal) {
        if (isAdmin(principal) || isOwnGym(gymId, principal)) {
            gymService.deleteGym(gymId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/mygym/equipments")
    @ApiOperation(value="로그인한 유저가 소속된 헬스장의 운동기구들을 열람 요청합니다.")
    public ResponseEntity<List<Equipment>> readGymEquipmentsList(Principal principal) {
        return new ResponseEntity<>(gymService.selectGymEquipmentsListByUsername(principal.getName()),HttpStatus.OK);
    }
}

