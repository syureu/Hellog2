#include <SoftwareSerial.h>
SoftwareSerial BTSerial(2, 3); // tx, rx

const int GREEN = 5;
const int BLUE = 7;
const int RED = 9;

void setup() {
  // put your setup code here, to run once:
  BTSerial.begin(9600);
  pinMode(GREEN, OUTPUT);
  pinMode(BLUE, OUTPUT);
  pinMode(RED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(BTSerial.available()){
    char bt = BTSerial.read();
    if(bt == 'a') digitalWrite(GREEN, HIGH);
    if(bt == 'b') digitalWrite(BLUE, HIGH);
    if(bt == 'c') digitalWrite(RED, HIGH);
    if(bt == 'd') digitalWrite(GREEN, LOW);
    if(bt == 'e') digitalWrite(BLUE, LOW);
    if(bt == 'f') digitalWrite(RED, LOW);
  }

}
