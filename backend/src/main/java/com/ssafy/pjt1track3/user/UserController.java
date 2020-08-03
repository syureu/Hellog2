package com.ssafy.pjt1track3.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @GetMapping("/{user_id}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#userId)")
    public ResponseEntity<User> checkUser(@PathVariable Long userId) {
        return new ResponseEntity<>(userService.selectUser(userId), HttpStatus.OK);
    }

    @PutMapping("/{user_id}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#userId)")
    public ResponseEntity<String> modifyUser(@PathVariable Long userId, @RequestBody User user) {
        userService.updateUser(userId, user);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @DeleteMapping("/{user_id}")
    @PreAuthorize(value="hasAuthority('ADMIN')" +
            "or authentication.principal.equals(#userId)")
    public ResponseEntity<String> removeUser(@PathVariable("user_id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
}
