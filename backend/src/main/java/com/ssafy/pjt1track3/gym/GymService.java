package com.ssafy.pjt1track3.gym;

import com.ssafy.pjt1track3.equipment.Equipment;
import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymService {

    private GymRepository gymRepository;
    private UserRepository userRepository;

    public GymService(final GymRepository gymRepository, final UserRepository userRepository) {
        this.gymRepository = gymRepository;
        this.userRepository = userRepository;
    }

    public void insertGym(Gym gym) {
        gymRepository.insertGym(gym);
        User user = userRepository.selectUser(gym.getRepresentative());
        user.setGymId(gym.getGymId());
        user.setRoles("COACH");
        userRepository.updateUser(user);
    }

    public Gym selectGym(Long gymId) {
        return gymRepository.selectGym(gymId);
    }

    public void updateGym(Long gymId, Gym gym) {
        gym.setGymId(gymId);
        gymRepository.updateGym(gym);
    }

    public void deleteGym(Long gymId) {
        gymRepository.deleteGym(gymId);
    }

    public List<String> selectGymRepresentativeUsernameByGymId(Long gymId) {
        return gymRepository.selectGymRepresentativeUsernameByGymId(gymId);
    }

    public List<Equipment> selectGymEquipmentsListByUsername(String name) {
        return gymRepository.selectGymEquipmentsListByUsername(name);
    }
}
