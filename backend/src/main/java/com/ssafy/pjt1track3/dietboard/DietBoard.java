package com.ssafy.pjt1track3.dietboard;

import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

public class DietBoard {
    @ApiModelProperty(
            value = "식단관리 게시판 게시글 DB 관리용 ID",
            required = false,
            example = "1",
            hidden = true
    )
    private Long dietBoardContentId;
    @ApiModelProperty(
            value = "게시글 제목",
            required = true,
            example = "제가 만든 아침인데 백종원 선생님께서 보시고 우셨습니다.",
            hidden = false
    )
    private String title;
    @ApiModelProperty(
            value = "작성자(의 id)",
            required = true,
            example = "1",
            hidden = false
    )
    private Long writer;
    @ApiModelProperty(
            value = "게시글 작성 시간(서버에 요청한 시간으로 처리)",
            required = false,
            example = "2020-08-17T21:19:24.471+09:00",
            hidden = true
    )
    private Date writeTime;
    @ApiModelProperty(
            value = "게시글 수정 시간(서버에 요청한 시간으로 처리)",
            required = false,
            example = "2020-08-17T21:19:24.471+09:00",
            hidden = true
    )
    private Date editTime;
    @ApiModelProperty(
            value = "게시글 내용",
            required = true,
            example = "근데 맛을 보시진 않으셨어요",
            hidden = false
    )
    private String content;
    @ApiModelProperty(
            value = "첨부 사진(null일시 사진 없음, 아니면 사진 있음)",
            required = false,
            example = "BINARY DATA",
            hidden = false
    )
    private Byte[] picture;

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
