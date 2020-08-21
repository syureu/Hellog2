package com.ssafy.pjt1track3.nfc;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NfcRepository {
    void insertNfc(Nfc nfc);
    Long selectIdByHashcode(String hashcode);
    String selectUsernameFromNfcId(Long nfcId);
    Nfc selectNfc(Long nfcId);
}
