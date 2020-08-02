#include <SoftwareSerial.h>

#define TX 3
#define RX 2
SoftwareSerial BTSerial(TX, RX); // Tx, Rx

const int trig = 8;
const int echo = 9;

float prevDistance;

void setup() {
  // put your setup code here, to run once:
  BTSerial.begin(9600);
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

int count_up(){
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  int duration = pulseIn(echo,HIGH);

  float cm = duration / 58.0;
  cm = (int(cm * 100.0)) / 100.0;

  return cm;
}

void send_msg(String msg, float a){
  if(Serial.available() > 0){
    Serial.print("in");
    BTSerial.print(1);
    BTSerial.print(msg);
    BTSerial.print(a);
  }
}

void loop() {
  //String msg = "";
  float a = 0;
  int time_cnt = 0;
  //while(true){
  //  float distance = count_up();
  //  if(distance > 0 && distance < 10){
      //msg = "up";
  //    if(time_cnt != 0) a = 2000 / time_cnt;
  //    else a = 0.01;
  //    break;
  //  }else if(distance > 10 && distance < 30){
  //    time_cnt += 100; 
  //  }
  //  else if(distance > 30){
      //msg = "down";
  //    time_cnt = 0;
  //   break;
  //  }
  //  delay(50);
  //}

  // ----------------------------------------------- //
  // ----------------------------------------------- //
  float distance = count_up();
  //Serial.println(distance);
  if(distance > 0 && distance < 10) {
    // cal distance gap
    // 5.00 -> count, 6.00 -> count
    // duplicate calculate problem
    float delta = prevDistance - distance;
    delta = (delta > 0 ? delta : -delta);
    if(delta > 5.00){    
      prevDistance = distance;
      //Serial.println(1);
      BTSerial.print(1);
      BTSerial.print("count");
    }
  }

  if(distance > 30) {
    prevDistance = 0; // out of distance
  }
  // ----------------------------------------------- //
  // ----------------------------------------------- //

  //if(msg.compareTo("up") == 0 && a > 0.01) {
  //  BTSerial.print(1);
  //  BTSerial.print(msg);
  //  BTSerial.print(a);
  //}

  //send_msg(msg, a);
  //Serial.print(msg);
  //Serial.println(a);
    
  delay(150);
}
