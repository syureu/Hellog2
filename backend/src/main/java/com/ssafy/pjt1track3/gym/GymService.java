package com.ssafy.pjt1track3.gym;

import org.springframework.stereotype.Service;

@Service
public class GymService {

    private GymRepository gymRepository;

    public GymService(final GymRepository gymRepository) {
        this.gymRepository = gymRepository;
    }

    public void insertGym(Gym gym) {
        gymRepository.insertGym(gym);
    }

    public Gym selectGym(Long gymId) {
        return gymRepository.selectGym(gymId);
    }

    public void updateGym(Long gymId, Gym gym) {
        gym.setGym_id(gymId);
        gymRepository.updateGym(gym);
    }

    public void deleteGym(Long gymId) {
        gymRepository.deleteGym(gymId);
    }
}
