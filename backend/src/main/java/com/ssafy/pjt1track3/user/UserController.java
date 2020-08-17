package com.ssafy.pjt1track3.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(final UserService userService) {
        this.userService = userService;
    }

    private boolean isOwn(Long id, Principal principal) {
        User user = userService.selectUser(id);
        if (user != null && principal.getName().equals(user.getUsername()))
            return true;
        return false;
    }

    @PostMapping("/user")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        userService.insertUser(user);
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("/myinfo")
    public ResponseEntity<User> readMyUserInfo(Principal principal){
        return new ResponseEntity<>(userService.selectUserByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> readUser(@PathVariable Long id, Principal principal) {
        if (isAdmin(principal) || isOwn(id, principal)) {
            User user = userService.selectUser(id);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else if (isAdmin(principal)) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User requestUser, Principal principal) {
        if (isAdmin(principal) || isOwn(id, principal)) {
            User user = userService.selectUser(id);
            if (user != null) {
                userService.updateUser(id, requestUser);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else if (isAdmin(principal)) {
                return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id, Principal principal) {
        if (isAdmin(principal) || isOwn(id, principal)) {
            User user = userService.selectUser(id);
            if (user != null) {
                userService.deleteUser(id);
                return new ResponseEntity<>("", HttpStatus.OK);
            } else if (isAdmin(principal)) {
                return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>("", HttpStatus.FORBIDDEN);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    @GetMapping("/roles")
    public ResponseEntity<List<String>> readLoginUsersRoles(Principal principal) {
        return new ResponseEntity<>(userService.selectRoleListByUsername(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<String> usernameOverlapCheck(@PathVariable String username) {
        User user = userService.selectUserByUsername(username);
        if(user != null) {
            return new ResponseEntity<>("", HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>("", HttpStatus.OK);
        }
    }
}
