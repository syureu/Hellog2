<br />
<p align="center">

  <h2 align="center">IOT</h2>

  <p align="center">
    <br />
    <strong>초음파 센서를 이용한 횟수 카운팅</strong>
    <br />
    &&
    <br />
    <strong>라즈베리파이 Django를 이용한 데이터 백업<strong>
    </p>
</p>
<br>

# :gear: 환경설정

~~### 라즈베리파이 미니콘다~~

~~1. 라즈베리파이의 OS는 ARM 32bit 이므로 일반 linux에 miniconda를 설치하는 방식은 불가~~

~~2. arm 버전의 최신은 파이썬 3.4 이므로 Django의 버전도 2.0.0 으로 낮춰야 한다.~~

## 라즈베리파이에 직접 장고 설치

1. 미니콘다 환경에서 제한된 파이썬 버전을 사용해야하므로 미니콘다를 사용하지 않는다.

2. 파이썬 3.7, Django 2.1.15 버전 사용

3. 8/3(월) 라즈베리파이에 Django를 사용한 웹서버 환경 구축 완료

4. 외부 환경에서 웹페이지 확인하기 위한 명령어
   python manage.py runserver 0.0.0.0:(포트번호)

5. 아두이노에서 센서값이 올 때마다 라즈베리파이 웹페이지에 카운트 증가 구현

---

## nfc 모듈 연결

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

6. 선 연결 - I2C mode로 변경  
   SEL0 -> H  
   SEL1 -> L

   PN532 Raspberry  
   5V 5V  
   GND GND  
   SDA SDA0  
   SCL SCL0

---

<br/>

# :books: Read NFC DATA

1. \$ nfc-mfultralight r output.mfd

- 위 명령어 실행시 output.mfd 이름의 바이너리 파일이 생성

2. \$ strings output.mfd > output.txt

- 위 명령어 실행시 바이너리 파일을 output.txt로 출력

3. NFC 안의 데이터 형태가 text/plain, 데이터 내용이 Hello ! 일경우
   text/plainHello ! 형태로 출력됨

---

<br/>

# :cd: Arduino

## 초음파센서

1.  Aruduino Uno의 5V와 gnd 포트를 사용해 초음파센서의 전원을 연결한다.

2.  Arduino Uno 의 8, 9번 핀을 초음파센서의 trigger, echo 핀과 연결한다.

3.  trigger 핀으로 아주 짧은 시간의 HIGH 신호를 보내고 반사되어 echo핀이 HIGH 신호가 되는 시간을 통해 거리를 계산한다.

---

## 블루투스 모듈

1.  3.3v 전원과 gnd를 통해 블루투스에 전원을 연결한다.

2.  Arduino Uno의 tx,rx 핀을 3, 2번 핀으로 정의한다.

3.  SoftwareSerial 으로 tx, rx를 시리얼 통신하도록 정의한다.

4.  원하는 정보를 정의한 시리얼 통신 포트를 통해 내보낸다.

---

<br>

# :dvd: Raspberry Pi

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
