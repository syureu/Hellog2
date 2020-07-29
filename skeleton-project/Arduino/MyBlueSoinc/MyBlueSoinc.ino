#include <SoftwareSerial.h>

#define TX 3
#define RX 2
SoftwareSerial BTSerial(TX, RX); // Tx, Rx

const int trig = 8;
const int echo = 9;

void setup() {
  // put your setup code here, to run once:
  BTSerial.begin(9600);
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  int duration = pulseIn(echo,HIGH);

  float cm = duration / 58.0;
  cm = (int(cm * 100.0)) / 100.0;

  Serial.print(cm);
  Serial.println("cm");

  // int dis = duration / 29 /2;

  if(Serial.available()){
   BTSerial.print(1);
   BTSerial.print(cm);
  }

    delay(100);
}
