package com.cmd.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Consultation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToOne
	private Patient patientId;
	private String temperature;
	private String complain;
	private String hpi;
	private String observation;
	private boolean rr;
	private boolean bp;
	private boolean pulse;
	private boolean pulseOx;
	private String respiratory;
	private String respiratoryComment;
	private String bloodCirculation;
	private String bloodCirculationComment;
	
	@OneToOne
	private Visit visit;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Patient getPatientId() {
		return patientId;
	}
	public void setPatientId(Patient patientId) {
		this.patientId = patientId;
	}
	public String getTemperature() {
		return temperature;
	}
	public void setTemperature(String temperature) {
		this.temperature = temperature;
	}
	public String getComplain() {
		return complain;
	}
	public void setComplain(String complain) {
		this.complain = complain;
	}
	public String getHpi() {
		return hpi;
	}
	public void setHpi(String hpi) {
		this.hpi = hpi;
	}
	public String getObservation() {
		return observation;
	}
	public void setObservation(String observation) {
		this.observation = observation;
	}
	public boolean isRr() {
		return rr;
	}
	public void setRr(boolean rr) {
		this.rr = rr;
	}
	public boolean isBp() {
		return bp;
	}
	public void setBp(boolean bp) {
		this.bp = bp;
	}
	public boolean isPulse() {
		return pulse;
	}
	public void setPulse(boolean pulse) {
		this.pulse = pulse;
	}
	public boolean isPulseOx() {
		return pulseOx;
	}
	public void setPulseOx(boolean pulseOx) {
		this.pulseOx = pulseOx;
	}
	public String getRespiratory() {
		return respiratory;
	}
	public void setRespiratory(String respiratory) {
		this.respiratory = respiratory;
	}
	public String getRespiratoryComment() {
		return respiratoryComment;
	}
	public void setRespiratoryComment(String respiratoryComment) {
		this.respiratoryComment = respiratoryComment;
	}
	public String getBloodCirculation() {
		return bloodCirculation;
	}
	public void setBloodCirculation(String bloodCirculation) {
		this.bloodCirculation = bloodCirculation;
	}
	public String getBloodCirculationComment() {
		return bloodCirculationComment;
	}
	public void setBloodCirculationComment(String bloodCirculationComment) {
		this.bloodCirculationComment = bloodCirculationComment;
	}
	
}
