package com.ssafy.pjt1track3.auth;

import com.ssafy.pjt1track3.user.User;
import com.ssafy.pjt1track3.user.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/public")
@RequiredArgsConstructor
@CrossOrigin
public class PublicRestApiController {

    private final UserJpaRepository userRepository;

    // Available to all authenticated users
    @GetMapping("test")
    public String test1(){
        return "API Test 1";
    }

    // Available to managers
    @GetMapping("management/reports")
    public String reports(){
        return "API Test 2";
    }

    // Available to ROLE_ADMIN
    @GetMapping("admin/users")
    public List<User> allUsers(){
        return this.userRepository.findAll();
    }

}