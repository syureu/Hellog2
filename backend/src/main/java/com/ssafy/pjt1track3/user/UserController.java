package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins={"*"}, maxAge = 6000)
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<String> signUpUser(@RequestBody User user) {
        userService.insertUser(user);
        return new ResponseEntity<>("", HttpStatus.OK);
    }
}
