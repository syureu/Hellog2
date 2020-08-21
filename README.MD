# Hellog

#### IoT 장비를 이용한 자동 운동 기록 및 관리 서비스



## 프로젝트 소개

Hellog는 나만의 운동관리 비서입니다.

헬스장의 머신 기계에서 운동 시 **NFC 태그**를 통해 간단하게 접속 후, 수행 할 Set 수와 횟수, 무게를 입력하고 운동을 시작하면, 자동으로 카운팅이 됩니다.

목표한 운동을 완료 후 종료를 하게 되면 자동으로 **운동기록**이 DB로 넘어가 저장이 됩니다.

나의 운동 기록은 `hellog 홈페이지`에 접속하여 확인 할 수 있습니다.

또한 홈페이지에선 초급자, 중급자, 상급자 별 맞춤 운동을 추천하고 있고,
대표적인 헬스 기구들의 사용법이 소개되어 있습니다.

손쉬운 운동기록관리로 더욱 쉽고 재밌게 운동합시다.



## Frontend

React.Js를 활용하여 웹 서비스를 만들었습니다. 회원 가입을 하면, 자신의 운동 기록을 저장 할 수 있습니다.

 캘린더를 통해 나의 월간 운동량을 볼 수 있으며, 차트를 통해서 운동 별 운동량을 비교 분석 할 수 있습니다.

대표적인 기구에 대해 운동방법을 소개하고 있으며, 초급자, 중급자, 상급자 별 운동루틴을 추천하고 있습니다.



## Backend

Hellog Backend는 **메이븐 프로젝트**로 구성된 Spring Boot Application 입니다.

**RestFul API**구조를 가지고 있기 때문에 Swagger를 통해 프로젝트 관련내용을 확인할 수 있습니다. 웹페이지와 IoT 장비 양측으로 데이터 송수신이 가능합니다.

----------------

#### 로컬에서 헬로그 백엔드를 실행하는 법

Hellog Backend는 [메이븐](https://spring.io/guides/gs/maven/) 프로젝트로 구성된 [스프링 부트](https://spring.io/guides/gs/spring-boot) 어플리케이션입니다. 클론한 프로젝트에 일부 구성물을 추가한 후 메이븐 패키지를 통해 .jar 파일을 빌드하여 커맨드 라인에서 다음과 같이 실행합니다.

```
$ git clone https://github.com/syureu/Hellog2.git
```

몇 가지 파일은 보안상의 이유로 깃에 기록되지 않았습니다.

- Hellog2/backend/src/main/resources/\*.p12

SSL 인증서 입니다.

- Hellog2/backend/src/main/resources/application.properties

부트 어플리케이션 설정파일에는 ssl의 비밀번호, 암호화방법, DB의 주소, DB 계정 및 비밀번호 등이 노출되기 때문에 깃 프로젝트에 담겨 있지 않습니다. 아래의 내용을 작성하여 파일을 추가해주세요.

```
server.port={Port}
server.ssl.enabled=true
server.ssl.key-store={SSL KEY File Path.p12}
server.ssl.key-store-password={SSL KEY Password}
server.ssl.key-store-type={SSL KEY Type}
server.ssl.key-alias={SSL KEY Alias}

spring.jackson.time-zone={Timezone}

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url={Database URL}
spring.datasource.username={Database User}
spring.datasource.password={Database Password}

mybatis.type-aliases-package=com.ssafy.pjt1track3
mybatis.mapper-locations=classpath:mappers/*.xml

spring.jpa.hibernate.ddl-auto=none
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

위 두 파일을 작성한 이후 다음과 같이 .jar파일을 빌드 후 실행할 수 있습니다.

```
$ cd Hellog2/backend
$ mvn package
$ java -jar target/*.jar
```

프로젝트는 다음 경로에서 실행됩니다 : [https://localhost:port/](https://localhost:port/)

백엔드는 RESTFUL API 구조를 가지고 있기 때문에 경로접속을 통해 프로젝트 관련 내용을 확인하고 싶다면 제공되고 있는 [Swagger](https://localhost:port/swagger-ui.html) 페이지를 방문하시면 됩니다.

<img width="1042" alt="hellog-backend-application-swagger-screenshot" src="C:/Users/multicampus/Documents/카카오톡 받은 파일/README_resources/hellog_backend_application_swagger.png">

##### 버그와 이슈를 발견하신다면 제보해 주시면 감사하겠습니다.

이슈 트래커 주소 : [https://github.com/syureu/Hellog2/issues](https://github.com/syureu/Hellog2/issues)

#### 데이터베이스 설정

Hellog Backend Application은 mariadb 10.5.5를 기준으로 작성되었습니다. 다음과 같은 RDB가 필요합니다.
<img alt="tablelist" src="C:/Users/multicampus/Documents/카카오톡 받은 파일/README_resources/dblist.png">

자세한 DDL은 아래의 [DDL](#DDL)을 참조해 주세요.

#### 각자의 IDE에 셋팅하기

##### 필수 요소

다음의 환경이 당신의 환경에 설치되어있어야 합니다 :

- Java 11 혹은 그 이상 버전
- git command line tool (https://help.github.com/articles/set-up-git)
- Your preferred IDE
  - Eclipse with the m2e plugin. Note: when m2e is available, there is an m2 icon in `Help -> About` dialog. If m2e is
    not there, just follow the install process here: https://www.eclipse.org/m2e/
  - [Spring Tools Suite](https://spring.io/tools) (STS)
  - IntelliJ IDEA
  - [VS Code](https://code.visualstudio.com)

##### 따라해보기 :

1. On the command line

   ```
   git clone https://github.com/syureu/Hellog2.git
   ```

2. Inside Eclipse or STS

   ```
   File -> Import -> Maven -> Existing Maven project
   ```

   Then either build on the command line `./mvnw generate-resources` or using the Eclipse launcher (right click on project and `Run As -> Maven install`) to generate the css. Run the application main method by right clicking on it and choosing `Run As -> Java Application`.

3. Inside IntelliJ IDEA
   In the main menu, choose `File -> Open` and select the Petclinic [pom.xml](pom.xml). Click on the `Open` button.

   CSS files are generated from the Maven build. You can either build them on the command line `./mvnw generate-resources` or right click on the `pjt1track3` project then `Maven -> Generates sources and Update Folders`.

   A run configuration named `Pjt1track3Application` should have been created for you if you're using a recent Ultimate version. Otherwise, run the application by right clicking on the `Pjt1track3Application` main class and choosing `Run 'Pjt1track3Application'`.

4. Navigate to Hellog Backend Application Swagger

   Visit [https://localhost:port/swagger-ui.html](https://localhost:port/swagger-ui.html) in your browser.

#### 상세히 보기

-----------

| Spring Boot Configuration     | Class or Java property files                                 |
| ----------------------------- | ------------------------------------------------------------ |
| The Main Class                | [Pjt1track3Application](https://github.com/syureu/Hellog2/blob/dev-back/backend/src/main/java/com/ssafy/pjt1track3/Pjt1track3Application.java) |
| Spring Security Configuration | [SecurityConfiguration](https://github.com/syureu/Hellog2/blob/dev-back/backend/src/main/java/com/ssafy/pjt1track3/auth/SecurityConfiguration.java) |
| MyBatis Configuration         | [DatabaseConfig](https://github.com/syureu/Hellog2/blob/dev-back/backend/src/main/java/com/ssafy/pjt1track3/config/DatabaseConfig.java) |
| Swagger Configuration         | [SwaggerConfig](https://github.com/syureu/Hellog2/blob/dev-back/backend/src/main/java/com/ssafy/pjt1track3/config/SwaggerConfig.java) |

### 기획, 요구사항 명세서, DB 스키마

#### 1차 기획 및 요구사항

--------

회원이름 표시

- 기록 페이지 상단에 로그인한 회원의 이름을 표시한다.

회원의 운동기록을 달력에 표시

- 회원이 일 별로 운동한 기록을 달력에 표기 할 수 있게 한다.

회원의 운동기록을 차트와 그래프로 표시

- 회원의 총 운동 볼륨을 일 별로 차트에 표시한다.

헬스장의 기구 사용 기록을 차트로 표시

- 회원들이 사용한 기구를 통계내어 차트로 표시해준다.

트레이너가 회원마다 PT한 기록을 달력에 표시

- 특정 인물의 이름을 달력에 표시하여 PT를 한 것을 표시해준다.

달력 클릭 시 상세화면 표시

- 트레이너, 회원이 달력의 일을 클릭 하거나 자신의 운동을 클릭 하면 상세화면 표시

휴식시간알림

- 세트 종료 후 휴식시간을 알려준다 (2분)

운동프로그램추천

- 부위별 운동 프로그램을 추천해준다

회원의 건강정보

- 신장, 체중, 근육량, 체지방 등 정보 표시

운동기구 별 사용법 표시

- 각 운동기구 별 사용법을 표시한다

-유저의 종류는 관리자(admin), pt코치(coach), 일반회원(user)로 나뉜다. 등급의 역할로도 볼 수 있다. -회원가입이 가능하며 일반회원 가입이 가능하다. -회원은 아이디, 비밀번호, 이름, 나이, 전화번호, 성별, 가입일, 키, 몸무게, 어느 헬스장에 다니는지를
작성해야 가입 가능하다. 가입일은 자동으로 입력되며, 어느 헬스장에 다니는지는 스크롤박스로 선택가능하다. -헬스장을 다니지 않을 수 있으므로 헬스장은 없음 혹은 어떤 헬스장이 선택되도록 한다.

-헬스장의 정보는 이름, 주소, 전화번호, 대표코치(대표 역할)가 있다. -헬스장을 고유 식별하기 위해 내부 관리 번호를 부여한다(int auto increment)

-일반회원이 로그인하면 운동일지, 운동추천, 식단관리 를 볼 수있다. -운동일지는 체지방량지표, 근육량지표, 나의 운동일지 달력을 볼 수 있다. -운동추천은 내 운동 숙련도에 따른 운동법 안내를 받을 수 있다.(백 서버 필요 x) -식단관리 게시판은 로그인하지 않아도 볼 수 있다. -식단관리 게시판에는 여러 인원의 식단이 게시판 형태로 보여진다. -식단관리 게시글에 댓글 작성이 가능하다. 비회원은 댓글 작성할 수 없지만 볼 수는 있다. -식단관리 게시글 댓글에는 depth+1 까지의 대댓글이 가능하다. -회원은 자신이 작성한 댓글에 한해 수정 삭제가 가능하다.

-pt코치로 로그인 시 회원관리, 기구관리, 식단관리 를 볼 수 있다.
-pt코치는 유저와 같으며 어느 헬스장에 소속되었는지에 관한 정보가 추가로 있다. -한 헬스장의 대표역할을 할 경우 헬스장 정보의 대표코치에 등록된다.
-pt코치로 로그인 시 자신의 헬스장에 소속된 회원들의 운동정보를
개인 회원이 보는 것 처럼 볼 수 있다. (체지방, 근육량 지표 및 운동량 달력 정보) -기구관리는 헬스장에 등록된 기구들의 사용량을 볼 수 있다.
-pt코치는 식단 관리 게시판의 글을 작성, 수정, 삭제 가능하다.
-pt코치는 식단관리 게시글에 댓글을 작성, 삭제가 가능하다. -식단관리 게시글의 댓글이 삭제될 때 대댓글이 있다면 댓글의 내용은 지워지고
댓글이 있었다는 흔적만 남게된다. -관리자는 모든 헬스장의 정보를 접근 가능하다. (사이트 관리자 개념) -관리자는 각 헬스장에 관해선 pt 코치와 같은 권한을 가지게 된다.

-식단 관리 게시판의 내용은 식단과 디스크립션으로 작성된다. -식단 게시글 작성시 올리고 싶은 식단이 없으면 식단 추가 메뉴를 이용할 수 있다. -식단은 이름, 칼로리, 영양성분, 작성자, 사진(BLOB등) 등의 정보를 가진다. -식단이 비슷하지만 구분해야할 필요가 있으므로 내부 관리 번호를 가진다.

-iot장비가 계측한 운동량 데이터는 서버로 수신되어 db에 저장된다. -각 회원은 서버로 부터 요청하여 운동량 정보를 수신한다. -체지방량, 근육량 등의 정보도 비슷한 형태로 요청, 응답, 수신하여 출력한다.

-헬스장 운영(대표 pt코치)의 경우 일반 회원으로 가입하고 사이트 관리자에게 헬스장 개설 요청을
할 수 있다. -관리자는 헬스장 개설 요청을 수락하여 헬스장 정보를 만들거나, 혹은 반려 할 수 있다. -관리자는 헬스장을 삭제 가능하며 이 경우 대표코치와 pt코치들은 직위해제되어 일반회원으로 돌아간다 -식단관리 게시판등 이미 코치의 권한으로 작성된 글에 영향이 가지는 않지만 코치의 영향력 행사는 불가능해진다.
-pt코치의 경우 헬스장에 무조건 소속이 되어있어야 하며, 일반 회원이 아닌 pt코치로 소속이 되어야
헬스장의 회원들 정보에 접근 할 수 있다.
-pt코치가 헬스장을 이관할 경우 대표코 치는 각 헬스장의 코치들을 헬스장에서 등록 해제 가능하며,
해제되거나, 이관시 미리 관리자에게 요청하여 타 소속의 헬스장으로 옮길 수 있다.

#### 2차 기획 및 요구사항

##### 유저

-----

- 유저의 종류는 관리자, 코치, 일반회원으로 나뉜다. 등급의 개념으로 볼 수 있다.
- 회원가입시 일반회원으로 가입된다.
- 회원은 아이디, 비밀번호, 이름, 나이, 전화번호, 성별, 가입일, 키, 몸무게, 소속헬스장, 권한등급 이 있다.
- 소속헬스장은 검색등으로 찾아서 선택하도록 하고 헬스장을 다니지 않는 경우 null로 처리한다.
- pt코치는 소속 헬스장이 무조건 있어야 한다.
- 한 헬스장을 대표하는 pt코치는(관장 혹은 대표) 헬스장의 대표로 상호참조된다.
- 헬스장의 대표가 되는 것은 일반 회원 가입 후 내 정보 메뉴에서 사이트 관리자에게 헬스장 등록 요청을 하여
  관리자가 허가하면 헬스장 정보가 개설되며 헬스장대표 pt코치로 등록 된다.
- 이후 소속된 pt코치들을 등록하려면 일반회원으로 가입하고 헬스장에 pt코치로 신청을하면
  대표 pt코치가 허가하면 해당 헬스장 pt코치로 등록된다.
- 유저 정보가 사라질 시
  -> 체지방량지표, 근육량지표, 운동일지는 삭제된다.
  -> 식단관리게시판 관련 부분은 유지된다.
- 대표pt코치가 사라질 시
  -> 헬스장은 유지된다.

##### 헬스장

-------

- 헬스장의 정보는 이름, 주소, 전화번호, 대표코치가 있다.
- 헬스장 정보가 사라질 시
  -> pt코치들은 일반 회원이 된다.
  -> 기구 보유 현황은 삭제된다.
  -> 운동일지는 유지된다. (기구 보유 현황 참조는 원본이 삭제되어도 그대로 두도록 한다.)

##### 운동기구

---

- 운동기구의 등록 메뉴는 사이트 관리자가 볼 수 있고 등록, 수정, 삭제 가능하다.
- 운동기구의 정보로는 기구명, 제조사 가 있다.
- 운동기구 정보 삭제 시
  -> 기구 보유 현황은 유지된다.

##### 운동종류

----

- 운동종류의 등록 메뉴는 사이트 관리자가 볼 수 있고 등록, 수정, 삭제 가능하다.
- 운동종류의 정보로는 운동종류 가 있다.
- 운동종류 정보 삭제 시
  -> 기구 보유 현황은 유지된다.

##### 기구 보유 현황

--------

- 기구 보유 현황은 각 헬스장이 어떤 운동기구를 가지고 있는지 나타내는 것이다.
- 각 헬스장이 기기관리 및 iot장비를 통한 서비스를 하기 위해선 기기 보유 현황에 기기를 등록해야한다.
- 기구 보유 현황은 헬스장, 운동기구, 운동종류를 참조하여 등록한다.
- 기구 보유 현황 삭제 시
  -> 운동일지는 유지된다.

##### 일반회원 웹 메뉴

----

- 식단관리는 로그인 하지 않아도 볼 수 있다.
- 일반회원이 로그인하면 운동일지, 운동추천, 식단관리, 내 정보 메뉴를 볼 수 있다.
- 운동일지는 체지방량지표, 근육량지표, 나의 운동일지 달력을 볼 수 있다.
- 운동추천은 내 운동 숙련도를 선택하여 그에 따른 운동법 안내를 받을 수 있다.

##### 체지방량지표

----

- 체지방량지표는 회원의 체지방량지표 데이터이다.
- 아이디(참조), 체지방량, 측정일이 있다.

##### 근육량지표

-----

- 근육량지표는 회원의 근육량지표 데이터이다.
- 아이디(참조), 근육량, 측정일이 있다.

##### 운동일지 (iot 연관 부분)

---

- 운동일지는 운동일지 웹 메뉴중 달력의 운동일지 표시용 데이터들이다.
- 아이디(참조), 기구 보유 현황(참조), 카운트 단위(수), 날짜 가 있다.

##### 식단관리 게시판

----

- 식단관리 게시판에는 여러 인원의 식단이 게시판 형태로 보여진다.
- 식단관리 게시글은 회원 이상 작성할 수 있다.(비회원은 작성 불가능)
- 식단관리 게시글은 작성자만 수정 할 수 있다.
- 식단관리 게시글은 작성자 혹은 관리자가 삭제 가능하다.
- 식단관리 게시글의 정보는 작성자, 날짜, 아점저, 게시글, 사진(0~1장) 가 있다.
- 식단관리 게시글에 댓글 작성이 가능하다. (비회원은 작성 불가능)
- 식단관리 게시글의 댓글은 작성자만 수정 할 수 있다.
- 식단관리 게시글의 댓글은 작성자 혹은 관리자가 삭제 가능하다.
- 식단관리 게시글의 댓글에 대댓글을 한 단계까지 작성 가능하다.
- 식단관리 게시글의 대댓글이 있는 댓글을 삭제 시 댓글의 내용은 사라지며 댓글이 있었던 흔적만 남는다.

##### pt코치 웹 메뉴

----------

- pt코치로 로그인 시 회원관리, 기구관리, 식단관리, 내 정보 메뉴를 볼 수 있따.
- pt코치는 회원관리에서 자신의 헬스장에 소속된 회원들의 운동일지를 볼 수 있다.
- 기구관리 메뉴에서 헬스장에 등록된 기구들의 사용량을 볼 수 있다.



#### 1차 DB 스키마

<img width="1042" alt="dbscheme1" src="C:/Users/multicampus/Documents/카카오톡 받은 파일/README_resources/dbscheme1.png">

#### 2차 DB 스키마

-----



<img width="1042" alt="dbscheme1" src="C:/Users/multicampus/Documents/카카오톡 받은 파일/README_resources/dbscheme2.png">

#### License

----

The Hellog Backend application is released under version 2.0 of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).





 ## Embedded

**초음파센서**를 활용하여 운동기구의 상부와 추의 거리의 변화에 따라 카운팅이 되도록 구현하였습니다.  센서와 디바이스는 **블루투스**를 통해 데이터를 송수신하고, 목표운동이 종료되면  **Wi-fi**를 통해 Spring-Server로 전송하며, 만약 연결에 대해 Error가 발생하면 내부 DB에 임시 저장 후 연결되면 전송합니다. 

### :gear: 환경설정

~~### 라즈베리파이 미니콘다~~

~~1. 라즈베리파이의 OS는 ARM 32bit 이므로 일반 linux에 miniconda를 설치하는 방식은 불가~~

~~2. arm 버전의 최신은 파이썬 3.4 이므로 Django의 버전도 2.0.0 으로 낮춰야 한다.~~

#### 라즈베리파이에 직접 장고 설치

1. 미니콘다 환경에서 제한된 파이썬 버전을 사용해야하므로 미니콘다를 사용하지 않는다.
2. 파이썬 3.7, Django 2.1.15 버전 사용
3. 8/3(월) 라즈베리파이에 Django를 사용한 웹서버 환경 구축 완료
4. 외부 환경에서 웹페이지 확인하기 위한 명령어
   python manage.py runserver 0.0.0.0:(포트번호)
5. 아두이노에서 센서값이 올 때마다 라즈베리파이 웹페이지에 카운트 증가 구현

-----------

#### nfc 모듈 연결

1. 라즈베리파이 i2c enable 설정 (sudo raspi-config)

2. packages 다운로드
   sudo apt-get update
   sudo apt-get install libusb-dev libpcsclite-dev i2c-tools

3. Download and unzip
   cd ~
   wget http://dl.bintray.com/nfc-tools/sources/libnfc-1.7.1.tar.bz2
   tar -xf libnfc-1.7.1.tar.bz2

4. Compile and install
   cd libnfc-1.7.1
   ./configure --prefix=/usr --sysconfdir=/etc
   make
   sudo make install

5. libnfc.conf 설정
   cd /etc
   sudo mkdir nfc
   sudo nano /etc/nfc/libnfc.conf

libnfc.config 내용

``` libnfc.config
#Allow device auto-detection (default: true)
#Note: if this auto-detection is disabled, user has to set manually a device
#configuration using file or environment variable
allow_autoscan = true

#Allow intrusive auto-detection (default: false)
#Warning: intrusive auto-detection can seriously disturb other devices
#This option is not recommended, user should prefer to add manually his device.
allow_intrusive_scan = false

#Set log level (default: error)
#Valid log levels are (in order of verbosity): 0 (none), 1 (error), 2 (info), 3 (debug)
#Note: if you compiled with --enable-debug option, the default log level is "debug"
log_level = 1

#Manually set default device (no default)
#To set a default device, you must set both name and connstring for your device
#Note: if autoscan is enabled, default device will be the first device available in device list.
#device.name = "\_PN532_SPI"
#device.connstring = "pn532_spi:/dev/spidev0.0:500000"
device.name = "\_PN532_I2c"
device.connstring = "pn532_i2c:/dev/i2c-1"
```

6. 선 연결 - I2C mode로 변경  
   SEL0 -> H  
   SEL1 -> L

   PN532 Raspberry  
   5V 5V  
   GND GND  
   SDA SDA0  
   SCL SCL0

-----

#### :books: Read NFC DATA

------

1. \$ nfc-mfultralight r output.mfd

- 위 명령어 실행시 output.mfd 이름의 바이너리 파일이 생성

2. \$ strings output.mfd > output.txt

- 위 명령어 실행시 바이너리 파일을 output.txt로 출력

3. NFC 안의 데이터 형태가 text/plain, 데이터 내용이 Hello ! 일경우
   text/plainHello ! 형태로 출력됨

---

<br/>

### :cd: Arduino

#### 초음파센서

-----

1.  Aruduino Uno의 5V와 gnd 포트를 사용해 초음파센서의 전원을 연결한다.

2.  Arduino Uno 의 8, 9번 핀을 초음파센서의 trigger, echo 핀과 연결한다.

3.  trigger 핀으로 아주 짧은 시간의 HIGH 신호를 보내고 반사되어 echo핀이 HIGH 신호가 되는 시간을 통해 거리를 계산한다.

#### 블루투스 모듈

-----

1.  3.3v 전원과 gnd를 통해 블루투스에 전원을 연결한다.

2.  Arduino Uno의 tx,rx 핀을 3, 2번 핀으로 정의한다.

3.  SoftwareSerial 으로 tx, rx를 시리얼 통신하도록 정의한다.

4.  원하는 정보를 정의한 시리얼 통신 포트를 통해 내보낸다.

---

<br>

### :dvd: Raspberry Pi

1. hellog.sh 실행 - 아래 4개의 파일이 동시 실행

- Django
- watch.py
- blueSonic.py
- nfc
- Django WebServer 접속

2. NFC Read 시 Hash 폴더에 바이너리 파일 생성

3. watch.py에서 Django WebServer로 request 전송

4. Django WebServer에서 파일을 읽은 후 Spring Server로 전송 및 파일 삭제

5. 해쉬 값을 통한 로그인

   5-1. 관리자일 경우 운동 기구 설정 및 운동 설정

   5-2. 운동 기구 및 운동이 설정 되어있을 경우 유저와 같은 프로세스 진행

   5-3. 유저일 경우 운동 목표 설정

6. 운동 시작 시 아두이노의 초음파 센서로 횟수를 카운트

7. 운동 종료 시 운동 기록을 Spring Server로 전송

   7-1. Spring Server와의 Connection Error시에 내부 DB에 저장

   7-2. 재 연결시 내부 DB 정보를 Spring Server로 보내며 내부 DB Clear







#### 개발 스택

##### 협업

- Jira
- GitLab 
- Mattermost

##### DB

- Maria DB
- Spring

##### Framework

- React
- Django
- Node JS

##### Embedded part

- Raspberry Pi
- NFC
- Arduino
  - Bluetooth Module
  - Ultrasonic wave
- 

---

##### IoT Part

https://lab.ssafy.com/s03-webmobile3-sub3/s03p13d203/tree/dev/IOT



### 함께한 팀원

---

### SSAFY 3기 구미 D203 - Team 5!

- Frontend
  - `이동규` 
  - `전상혁`
  - `한광욱`
- Backend
  - `김기담`
- Embedded & IoT
  - `정연욱`
  - `주지환`

---

