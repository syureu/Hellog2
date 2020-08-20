package com.ssafy.pjt1track3.nfc;

public class Nfc {
    private Long NfcId;
    private String NfcHash;
    private Long id;

    public Nfc(Long nfcId, String nfcHash, Long id) {
        NfcId = nfcId;
        NfcHash = nfcHash;
        this.id = id;
    }

    public Long getNfcId() {
        return NfcId;
    }

    public void setNfcId(Long nfcId) {
        NfcId = nfcId;
    }

    public String getNfcHash() {
        return NfcHash;
    }

    public void setNfcHash(String nfcHash) {
        NfcHash = nfcHash;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
