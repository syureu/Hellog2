#include <stdio.h>
#include <string.h>
#include "KISA_SHA256.h"

typedef unsigned char  BYTE;
typedef unsigned int   UINT;

int main(){
  FILE *fp;

  BYTE plain[32];
  BYTE encrypt[32];
  UINT plain_leng = 0;
  int i = 0;

  memset(plain, 0x00, sizeof(plain));
  memset(encrypt, 0x00, sizeof(encrypt));

  printf("입력: " );
  scanf("%s",plain);
  plain_leng = strlen((char *)plain);

  SHA256_Encrypt(plain, plain_leng, encrypt);

printf("해쉬화 : ");

  for(i=0; i < 32; i++){
    printf("%02X", encrypt[i]);
  }

  printf("\n");

  return 0;
}
