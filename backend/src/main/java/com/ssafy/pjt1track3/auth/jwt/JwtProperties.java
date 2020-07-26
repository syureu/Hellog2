package com.ssafy.pjt1track3.auth.jwt;

public class JwtProperties {
    public static final String SECRET = "testhash";
    public static final int EXPIRATION_TIME = 1000*3600; // ms
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
