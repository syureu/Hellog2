package com.ssafy.pjt1track3.gym;

import com.ssafy.pjt1track3.equipment.Equipment;
import com.ssafy.pjt1track3.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/gyms")
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
    public ResponseEntity<String> createGym(@RequestBody Gym gym, Principal principal) {
        if (isAdmin(principal)) {
            gymService.insertGym(gym);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{gymId}")
    public ResponseEntity<Gym> readGym(@PathVariable Long gymId) {
        Gym gym = gymService.selectGym(gymId);
        if (gym != null) {
            return new ResponseEntity<>(gym, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(gym, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/{gymId}")
    public ResponseEntity<String> updateGym(@PathVariable Long gymId, @RequestBody Gym gym, Principal principal) {
        if (isAdmin(principal) || isOwnGym(gymId, principal)) {
            gymService.updateGym(gymId, gym);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{gymId}")
    public ResponseEntity<String> deleteGym(@PathVariable Long gymId, Principal principal) {
        if (isAdmin(principal) || isOwnGym(gymId, principal)) {
            gymService.deleteGym(gymId);
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/mygym/equipments")
    public ResponseEntity<List<Equipment>> readGymEquipmentsList(Principal principal) {
        return new ResponseEntity<>(gymService.selectGymEquipmentsListByUsername(principal.getName()),HttpStatus.OK);
    }
}

