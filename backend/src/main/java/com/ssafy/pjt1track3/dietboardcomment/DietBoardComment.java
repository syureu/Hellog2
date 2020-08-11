package com.ssafy.pjt1track3.dietboardcomment;

import java.util.Date;

public class DietBoardComment {
    Long dietBoardCommentId;
    Long dietBoardContentId;
    Long writer;
    Date writeTime;
    Date editTime;
    String content;
    Long referenceId;

    public DietBoardComment(Long dietBoardCommentId, Long dietBoardContentId, Long writer, Date writeTime, Date editTime, String content, Long referenceId) {
        this.dietBoardCommentId = dietBoardCommentId;
        this.dietBoardContentId = dietBoardContentId;
        this.writer = writer;
        this.writeTime = writeTime;
        this.editTime = editTime;
        this.content = content;
        this.referenceId = referenceId;
    }

    public Long getDietBoardCommentId() {
        return dietBoardCommentId;
    }

    public void setDietBoardCommentId(Long dietBoardCommentId) {
        this.dietBoardCommentId = dietBoardCommentId;
    }

    public Long getDietBoardContentId() {
        return dietBoardContentId;
    }

    public void setDietBoardContentId(Long dietBoardContentId) {
        this.dietBoardContentId = dietBoardContentId;
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

    public Long getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(Long referenceId) {
        this.referenceId = referenceId;
    }
}