package com.ssafy.pjt1track3.nfc;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ssafy.pjt1track3.auth.jwt.JwtProperties;
import io.swagger.annotations.Api;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;

import static com.ssafy.pjt1track3.util.Util.isAdmin;

@RestController
@RequestMapping("/api/nfcs")
@Api(
        tags = {"NFC"},
        description = "NFC"
)
public class NfcController {

    private NfcService nfcService;

    public NfcController(final NfcService nfcService) {
        this.nfcService = nfcService;
    }

    @PostMapping("/nfc")
    public ResponseEntity<String> createNfc(@RequestBody Nfc nfc) {
        nfcService.insertNfc(nfc);
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("/login/{hashcode}")
    public ResponseEntity<String> loginNfc(@PathVariable String hashcode) {
        String username = nfcService.readUsernameFromHashCode(hashcode);
        if (username == null) {
            return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
        }
        String token = JWT.create()
                .withSubject(username)
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(JwtProperties.SECRET.getBytes()));

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + token);
        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body("");
    }

    @GetMapping("/{nfcId}")
    public ResponseEntity<Nfc> readNfc(@PathVariable Long nfcId, Principal principal) {
        if (isAdmin(principal) || principal.getName().equals(nfcService.readUsernameFromNfcId(nfcId))) {
            Nfc nfc = nfcService.selectNfc(nfcId);
            if (nfc != null) {
                return new ResponseEntity<>(nfc, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
