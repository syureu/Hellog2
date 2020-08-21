package com.ssafy.pjt1track3.config;

import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
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

    List<ResponseMessage> getResponseMessageList = new ArrayList<>();
    List<ResponseMessage> postResponseMessageList = new ArrayList<>();
    List<ResponseMessage> putResponseMessageList = new ArrayList<>();
    List<ResponseMessage> deleteResponseMessageList = new ArrayList<>();

    @Bean
    public Docket api() {
        getResponseMessageList.add(new ResponseMessageBuilder()
                .code(200)
                .message("GET 요청이 성공적입니다. 응답내용이 Body에 있습니다.")
                .build());
        getResponseMessageList.add(new ResponseMessageBuilder()
                .code(204)
                .message("GET 요청시 요청에는 문제가 없으나 해당하는 데이터가 없을 경우 입니다.")
                .build());
        getResponseMessageList.add(new ResponseMessageBuilder()
                .code(403)
                .message("해당 GET 요청에 대한 권한이 없습니다.")
                .build());
        getResponseMessageList.add(new ResponseMessageBuilder()
                .code(500)
                .message("해당 POST 요청에 대한 백단 내부에 문제가 있으니 백엔드 담당자에게 제보하세욧!!")
                .build());

        postResponseMessageList.add(new ResponseMessageBuilder()
                .code(200)
                .message("POST 요청이 성공적입니다. 즉 데이터 삽입이 성공적으로 수행되었습니다.")
                .build());
        postResponseMessageList.add(new ResponseMessageBuilder()
                .code(400)
                .message("JSON을 파싱할 수 없습니다. JSON 포맷을 확인하세요. 그래도 안되면 백엔드한테 봐달라고 졸라요.")
                .build());
        postResponseMessageList.add(new ResponseMessageBuilder()
                .code(403)
                .message("해당 POST 요청에 대한 권한이 없습니다.")
                .build());
        postResponseMessageList.add(new ResponseMessageBuilder()
                .code(500)
                .message("해당 POST 요청에 대한 백단 내부에 문제가 있으니 백엔드 담당자에게 제보하세욧!!")
                .build());

        putResponseMessageList.add(new ResponseMessageBuilder()
                .code(200)
                .message("PUT 요청이 성공적입니다. 즉 데이터 수정이 성공적으로 수행되었습니다.")
                .build());
        putResponseMessageList.add(new ResponseMessageBuilder()
                .code(400)
                .message("JSON을 파싱할 수 없습니다. JSON 포맷을 확인하세요. 그래도 안되면 백엔드한테 봐달라고 졸라요.")
                .build());
        putResponseMessageList.add(new ResponseMessageBuilder()
                .code(403)
                .message("해당 PUT 요청에 대한 권한이 없습니다.")
                .build());
        putResponseMessageList.add(new ResponseMessageBuilder()
                .code(500)
                .message("해당 PUT 요청에 대한 백단 내부에 문제가 있으니 백엔드 담당자에게 제보하세욧!!")
                .build());

        deleteResponseMessageList.add(new ResponseMessageBuilder()
                .code(200)
                .message("DELETE 요청이 성공적입니다. 즉 데이터의 삭제가 성공적으로 수행되었습니다.")
                .build());
        deleteResponseMessageList.add(new ResponseMessageBuilder()
                .code(403)
                .message("해당 DELETE 요청에 대한 권한이 없습니다.")
                .build());
        deleteResponseMessageList.add(new ResponseMessageBuilder()
                .code(500)
                .message("해당 DELETE 요청에 대한 백단 내부에 문제가 있으니 백엔드 담당자에게 제보하세욧!!")
                .build());

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(Predicates.not(RequestHandlerSelectors.
                        basePackage("org.springframework.boot")))
                .paths(PathSelectors.any())
                .build()
                .globalResponseMessage(RequestMethod.GET, getResponseMessageList)
                .globalResponseMessage(RequestMethod.POST, postResponseMessageList)
                .globalResponseMessage(RequestMethod.PUT, putResponseMessageList)
                .globalResponseMessage(RequestMethod.DELETE, deleteResponseMessageList);
    }
}