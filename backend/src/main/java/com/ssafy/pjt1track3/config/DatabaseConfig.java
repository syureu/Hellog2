package com.ssafy.pjt1track3.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(basePackages = "com.ssafy.pjt1track3")
public class DatabaseConfig {
}
