package com.ssafy.pjt1track3.dietboardcomment;

import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

public class DietBoardComment {
    @ApiModelProperty(
            value = "식단관리 게시판 댓글 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    Long dietBoardCommentId;
    @ApiModelProperty(
            value = "어떤 게시글에 작성된 댓글인지 참조하는 게시글 번호",
            required = true,
            example = "1",
            hidden = false
    )
    Long dietBoardContentId;
    @ApiModelProperty(
            value = "작성자(의 Id)",
            required = true,
            example = "1",
            hidden = false
    )
    Long writer;
    @ApiModelProperty(
            value = "댓글 작성 시간(서버에 요청한 시간으로 처리)",
            required = false,
            example = "2020-08-17T21:19:24.471+09:00",
            hidden = false
    )
    Date writeTime;
    @ApiModelProperty(
            value = "댓글 수정 시간(서버에 요청한 시간으로 처리)",
            required = false,
            example = "2020-08-17T21:19:24.471+09:00",
            hidden = false
    )
    Date editTime;
    @ApiModelProperty(
            value = "댓글 내용",
            required = true,
            example = "1등",
            hidden = false
    )
    String content;
    @ApiModelProperty(
            value = "어떤 댓글의 대댓글인지 참조하는 댓글 번호(null일시 댓글, 아니면 대댓글)",
            required = false,
            example = "등수충 죽어죽어주겅",
            hidden = false
    )
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