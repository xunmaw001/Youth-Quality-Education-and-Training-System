package com.entity.model;

import com.entity.JiaoxuexinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 教学信息
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-04-03 11:19:32
 */
public class JiaoxuexinxiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 科目类型
	 */
	
	private String kemuleixing;
		
	/**
	 * 上课年级
	 */
	
	private String shangkenianji;
		
	/**
	 * 上课地点
	 */
	
	private String shangkedidian;
		
	/**
	 * 上课时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date shangkeshijian;
		
	/**
	 * 课程费用
	 */
	
	private Float kechengfeiyong;
		
	/**
	 * 课程介绍
	 */
	
	private String kechengjieshao;
		
	/**
	 * 课程图片
	 */
	
	private String kechengtupian;
		
	/**
	 * 教师编号
	 */
	
	private String jiaoshibianhao;
		
	/**
	 * 教师姓名
	 */
	
	private String jiaoshixingming;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
		
	/**
	 * 最近点击时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date clicktime;
		
	/**
	 * 点击次数
	 */
	
	private Integer clicknum;
				
	
	/**
	 * 设置：科目类型
	 */
	 
	public void setKemuleixing(String kemuleixing) {
		this.kemuleixing = kemuleixing;
	}
	
	/**
	 * 获取：科目类型
	 */
	public String getKemuleixing() {
		return kemuleixing;
	}
				
	
	/**
	 * 设置：上课年级
	 */
	 
	public void setShangkenianji(String shangkenianji) {
		this.shangkenianji = shangkenianji;
	}
	
	/**
	 * 获取：上课年级
	 */
	public String getShangkenianji() {
		return shangkenianji;
	}
				
	
	/**
	 * 设置：上课地点
	 */
	 
	public void setShangkedidian(String shangkedidian) {
		this.shangkedidian = shangkedidian;
	}
	
	/**
	 * 获取：上课地点
	 */
	public String getShangkedidian() {
		return shangkedidian;
	}
				
	
	/**
	 * 设置：上课时间
	 */
	 
	public void setShangkeshijian(Date shangkeshijian) {
		this.shangkeshijian = shangkeshijian;
	}
	
	/**
	 * 获取：上课时间
	 */
	public Date getShangkeshijian() {
		return shangkeshijian;
	}
				
	
	/**
	 * 设置：课程费用
	 */
	 
	public void setKechengfeiyong(Float kechengfeiyong) {
		this.kechengfeiyong = kechengfeiyong;
	}
	
	/**
	 * 获取：课程费用
	 */
	public Float getKechengfeiyong() {
		return kechengfeiyong;
	}
				
	
	/**
	 * 设置：课程介绍
	 */
	 
	public void setKechengjieshao(String kechengjieshao) {
		this.kechengjieshao = kechengjieshao;
	}
	
	/**
	 * 获取：课程介绍
	 */
	public String getKechengjieshao() {
		return kechengjieshao;
	}
				
	
	/**
	 * 设置：课程图片
	 */
	 
	public void setKechengtupian(String kechengtupian) {
		this.kechengtupian = kechengtupian;
	}
	
	/**
	 * 获取：课程图片
	 */
	public String getKechengtupian() {
		return kechengtupian;
	}
				
	
	/**
	 * 设置：教师编号
	 */
	 
	public void setJiaoshibianhao(String jiaoshibianhao) {
		this.jiaoshibianhao = jiaoshibianhao;
	}
	
	/**
	 * 获取：教师编号
	 */
	public String getJiaoshibianhao() {
		return jiaoshibianhao;
	}
				
	
	/**
	 * 设置：教师姓名
	 */
	 
	public void setJiaoshixingming(String jiaoshixingming) {
		this.jiaoshixingming = jiaoshixingming;
	}
	
	/**
	 * 获取：教师姓名
	 */
	public String getJiaoshixingming() {
		return jiaoshixingming;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
				
	
	/**
	 * 设置：最近点击时间
	 */
	 
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
				
	
	/**
	 * 设置：点击次数
	 */
	 
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
			
}
