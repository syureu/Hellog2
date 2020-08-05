package com.ssafy.pjt1track3.equipment;

import com.ssafy.pjt1track3.gym.GymService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/equipments")
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
    public ResponseEntity<String> createEquipment(@RequestBody Equipment equipment, Principal principal) {
        boolean isAdminFlag= isAdmin(principal);
        if(isAdminFlag || isOwnGym(equipment.getGymId(), principal)){
            equipmentService.insertEquipment(equipment);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }
}
