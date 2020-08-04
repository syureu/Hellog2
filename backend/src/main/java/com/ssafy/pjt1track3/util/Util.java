package com.ssafy.pjt1track3.util;

import com.ssafy.pjt1track3.user.User;

import java.security.Principal;

public class Util {

    public static boolean isAdmin(Principal principal) {
        if (principal.getName().equals("admin"))
            return true;
        return false;
    }
}
