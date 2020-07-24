#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
byte start = 0;
void setup() {
  // put your setup code here, to run once:
  lcd.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
    
  lcd.clear();
    delay(1000);
    lcd.setCursor(start % 16, 0);
    lcd.print("Hi ^^");
    ++start;
    delay(1000);
}
