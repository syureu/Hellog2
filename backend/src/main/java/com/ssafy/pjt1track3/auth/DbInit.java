package com.ssafy.pjt1track3.auth;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
/*

@RequiredArgsConstructor
@Service
public class DbInit implements CommandLineRunner {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Delete all
        this.userRepository.deleteAll();

        // create users
        User kidam = new User("kidam",
                passwordEncoder.encode("kidam123"),
                "김기담",
                26,
                "01050439383",
                true,
                new Date(),
                185,
                100,
                new Date(2030,1,1),
                "USER",
                "");
        User admin = new User("admin",
                passwordEncoder.encode("admin123"),
                "관리자",
                20,
                "01012345678",
                false,
                new Date(),
                160,
                40,
                new Date(2030,1,1),
                "ADMIN",
                "ACCESS_TEST1,ACCESS_TEST2");
        User coach = new User("coach",
                passwordEncoder.encode("coach123"),
                "김싸피",
                25,
                "01098765432",
                true,
                new Date(),
                170,
                70,
                new Date(2030,1,1),
                "COACH",
                "ACCESS_TEST1");

        // List<User> users = Arrays.asList(kidam, admin, manager);

        // save to db
        // this.userRepository.saveAll(users);
        this.userRepository.insertUser(kidam);
        this.userRepository.insertUser(admin);
        this.userRepository.insertUser(coach);
    }
}

 */