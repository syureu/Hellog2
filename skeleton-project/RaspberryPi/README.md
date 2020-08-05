# RaspberryPi Folder

---

## 2020-07-23

### 1. 라즈베리파이 Docker 설치

### 2. docker-compose를 이용하여 wordpress 설치

### 3. SSH 설정으로 외부에서 서버 접속 가능

### 4. docker-compose를 이용하여 mysql 설치

---

## django를 활용 진행 상황

### 1. Anaconda > django 설치 후 기본 동작 연습 중 -> 추후 RaspberryPi 에서는 miniconda > django 로 사용 예정

---

## Django 실행 순서

1. 환경생성
   conda -n [환경이름] python=[버전]

2. 환경활성화
   conda activate [환경이름]

3. 환경비활성화
   conda deactivate [환경이름]

4. 장고 설치
   ~~pip install Django==2.1.7~~
   pip install Django==2.0 (최신 miniconda가 python 3.4.3을 지원함)

5. 장고 프레임워크 생성
   django-admin startproject [폴더이름][위치]

6. setting.py 수정
   LANGUAGE_CODE = 'ko-kr'
   TIME_ZONE = 'Asia/Seoul'
   STATIC_ROOT = os.path.join(BASE_DIR, 'static')

7. app 생성
   python manage.py startapp [앱 이름]

8. setting.py 등록
   INSTALLED_APPS = [
   '앱 이름', /*admin 위에 등록해야한다*/
   .....
   ]

9. 장고서버 실행
   python manage.py runserver

---

~~### 라즈베리파이 미니콘다~~

~~1. 라즈베리파이의 OS는 ARM 32bit 이므로 일반 linux에 miniconda를 설치하는 방식은 불가~~

~~2. arm 버전의 최신은 파이썬 3.4 이므로 Django의 버전도 2.0.0 으로 낮춰야 한다.~~

### 라즈베리파이에 직접 장고 설치

1. 미니콘다 환경에서 제한된 파이썬 버전을 사용해야하므로 미니콘다를 사용하지 않는다.

2. 파이썬 3.7, Django 2.1.15 버전 사용

3. 8/3(월) 라즈베리파이에 Django를 사용한 웹서버 환경 구축 완료

4. 외부 환경에서 웹페이지 확인하기 위한 명령어
   python manage.py runserver 0.0.0.0:(포트번호)

5. 아두이노에서 센서값이 올 때마다 라즈베리파이 웹페이지에 카운트 증가 구현

---

### nfc 모듈 연결

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

### Read NFC DATA

1. \$ nfc-mfultralight r output.mfd

- 위 명령어 실행시 output.mfd 이름의 바이너리 파일이 생성

2. \$ strings output.mfd > output.txt

- 위 명령어 실행시 바이너리 파일을 output.txt로 출력

3. NFC 안의 데이터 형태가 text/plain, 데이터 내용이 Hello ! 일경우
   text/plainHello ! 형태로 출력됨

### NFC Encrypt

Use AES 256
