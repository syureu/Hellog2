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

### 라즈베리파이 미니콘다

1. 라즈베리파이의 OS는 ARM 32bit 이므로 일반 linux에 miniconda를 설치하는 방식은 불가

2. arm 버전의 최신은 파이썬 3.4 이므로 Django의 버전도 2.0.0 으로 낮춰야 한다.
