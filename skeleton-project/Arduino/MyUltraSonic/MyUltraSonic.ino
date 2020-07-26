const int trig = 3;
const int echo = 4;
const int led[] = {5,6,7,8,9,10,11,12,13};

void setup() {
  // put your setup code here, to run once:
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  for(int i = 0; i < 9; ++i) pinMode(led[i], OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(trig,HIGH);
  delayMicroseconds(10);
  digitalWrite(trig,LOW);

  // 초음파가 발사되면 물체까지의 시간을 측정하여
  // 변수 duration에 넣어준다.
  int duration = pulseIn(echo, HIGH);

  // 측정된 시간을 cm 단위로 바꿔준다.
  int dis = duration / 29 / 2;

  for(int i = 12; i > 3; --i){
    if(dis < i) digitalWrite(led[12 - i], HIGH);
    else digitalWrite(led[12 - i], LOW);
  }

  delay(100);
}
