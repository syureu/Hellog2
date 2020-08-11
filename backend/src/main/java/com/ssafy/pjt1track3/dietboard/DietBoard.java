package com.ssafy.pjt1track3.dietboard;

import java.util.Date;

public class DietBoard {
    Long dietBoardContentId;
    String title;
    Long writer;
    Date writeTime;
    Date editTime;
    String content;
    Byte[] picture;

    public DietBoard(Long dietBoardContentId, String title, Long writer, Date writeTime, Date editTime, String content, Byte[] picture) {
        this.dietBoardContentId = dietBoardContentId;
        this.title = title;
        this.writer = writer;
        this.writeTime = writeTime;
        this.editTime = editTime;
        this.content = content;
        this.picture = picture;
    }

    public Long getDietBoardContentId() {
        return dietBoardContentId;
    }

    public void setDietBoardContentId(Long dietBoardContentId) {
        this.dietBoardContentId = dietBoardContentId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getWriter() {
        return writer;
    }

    public void setWriter(Long writer) {
        this.writer = writer;
    }

    public Date getWriteTime() {
        return writeTime;
    }

    public void setWriteTime(Date writeTime) {
        this.writeTime = writeTime;
    }

    public Date getEditTime() {
        return editTime;
    }

    public void setEditTime(Date editTime) {
        this.editTime = editTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Byte[] getPicture() {
        return picture;
    }

    public void setPicture(Byte[] picture) {
        this.picture = picture;
    }
}
