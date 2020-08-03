package com.ssafy.pjt1track3.gym;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins={"*"}, maxAge = 6000)
@RequestMapping("/api/gyms")
public class GymController {

    GymService gymService;

    public GymController(final GymService gymService) {
        this.gymService = gymService;
    }

    @PostMapping("/gym")
    @PreAuthorize(value="hasAuthority('ADMIN')")
    public ResponseEntity<String> createGym(@RequestBody Gym gym) {
        gymService.insertGym(gym);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @GetMapping("/{gymId}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#gymId)")
    public ResponseEntity<Gym> readGym(@PathVariable Long gymId) {
        return new ResponseEntity<>(gymService.selectGym(gymId), HttpStatus.OK);
    }

    @PutMapping("/{gymId}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#gymId)")
    public ResponseEntity<String> updateGym(@PathVariable Long gymId, @RequestBody Gym gym) {
        gymService.updateGym(gymId, gym);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @DeleteMapping("/{gymId}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#gymId)")
    public ResponseEntity<String> deleteGym(@PathVariable Long gymId) {
        gymService.deleteGym(gymId);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
}
