package com.ssafy.pjt1track3.nfc;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ssafy.pjt1track3.auth.LoginViewModel;
import com.ssafy.pjt1track3.auth.jwt.JwtProperties;
import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class NfcService {

    private NfcRepository nfcRepository;
    private UserRepository userRepository;

    public NfcService(final NfcRepository nfcRepository, final UserRepository userRepository) {
        this.nfcRepository = nfcRepository;
        this.userRepository = userRepository;
    }

    public void insertNfc(Nfc nfc) {
        nfcRepository.insertNfc(nfc);
    }

    public String readUsernameFromHashCode(String hashcode) {
        Long id = nfcRepository.selectIdByHashcode(hashcode);
        if (id == null) {
            return null;
        }
        User user = userRepository.selectUser(id);
        if (user == null) {
            return null;
        }
        return user.getUsername();
    }

    public String readUsernameFromNfcId(Long nfcId) {
        return nfcRepository.selectUsernameFromNfcId(nfcId);
    }

    public Nfc selectNfc(Long nfcId) {
        return nfcRepository.selectNfc(nfcId);
    }
}
