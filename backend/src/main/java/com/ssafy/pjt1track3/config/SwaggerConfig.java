package com.ssafy.pjt1track3.config;

import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    List<ResponseMessage> responseMessageList = new ArrayList<>();

    @Bean
    public Docket api() {
        responseMessageList.add(new ResponseMessageBuilder()
                .code(200)
                .message("요청이 성공적입니다. (기본)")
                .build());
        responseMessageList.add(new ResponseMessageBuilder()
                .code(204)
                .message("응답관련 요청시 요청에는 문제가 없으나 해당하는 데이터가 없을 경우 입니다. (기본 응답)")
                .build());
        responseMessageList.add(new ResponseMessageBuilder()
                .code(400)
                .message("JSON을 파싱할 수 없습니다. JSON 포맷을 확인하세요. 그래도 안되면 백엔드한테 봐달라고 졸라요. (기본 응답)")
                .build());
        responseMessageList.add(new ResponseMessageBuilder()
                .code(403)
                .message("권한이 없을때 내뱉는 리턴입니다.")
                .build());
        responseMessageList.add(new ResponseMessageBuilder()
                .code(500)
                .message("백단 내부에 처리가 덜됐으니 백엔드 담당자에게 제보하세욧!!")
                .build());

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(Predicates.not(RequestHandlerSelectors.
                        basePackage("org.springframework.boot")))
                .paths(PathSelectors.any())
                .build();
    }
}