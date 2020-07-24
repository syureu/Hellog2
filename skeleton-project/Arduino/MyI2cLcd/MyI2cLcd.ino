#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);


void setup() {
  // put your setup code here, to run once:
  lcd.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  lcd.setCursor(5,0);
  lcd.print("Hi ^^");
  delay(1000);
  lcd.setCursor(5,0);
  lcd.print("Coding run");
  delay(1000);
  lcd.clear();
  delay(1000);
}
