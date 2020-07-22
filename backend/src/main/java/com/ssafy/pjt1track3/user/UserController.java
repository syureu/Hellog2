package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;

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

    @GetMapping("/{id}")
    public ResponseEntity<User> checkUser(@PathVariable String id) {
        return new ResponseEntity<>(userService.selectUser(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> modifyUser(@PathVariable String id, @RequestBody User user) {
        userService.updateUser(user);
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeUser(@PathVariable String id) {
        userService.deleteUser(id);
        return new ResponseEntity<>("", HttpStatus.OK);
    }
}
