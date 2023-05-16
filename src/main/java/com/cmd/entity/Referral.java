package com.cmd.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Referral {
	
	@Id
	private long id;
	@OneToOne
	private Patient patientId;
	private String transferingHospital;
	private String transferingDepartment;
	private String transferingFacility;
	private String receivingFacility;
	private String receivingDepartment;
	private String vitalSign;
	private String receivingHospital;
	private String diagnosis;
	private String reason;
	private String status;
	private String procedures;
	private String laboratory;
	private String clinicalPresentation;
	private String others;
	private LocalDate createdAt;
	
	@OneToOne
    private User doneBy;
	
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
	public String getTransferingHospital() {
		return transferingHospital;
	}
	public void setTransferingHospital(String transferingHospital) {
		this.transferingHospital = transferingHospital;
	}
	public String getTransferingDepartment() {
		return transferingDepartment;
	}
	public void setTransferingDepartment(String transferingDepartment) {
		this.transferingDepartment = transferingDepartment;
	}
	public String getTransferingFacility() {
		return transferingFacility;
	}
	public void setTransferingFacility(String transferingFacility) {
		this.transferingFacility = transferingFacility;
	}
	public String getReceivingFacility() {
		return receivingFacility;
	}
	public void setReceivingFacility(String receivingFacility) {
		this.receivingFacility = receivingFacility;
	}
	public String getReceivingDepartment() {
		return receivingDepartment;
	}
	public void setReceivingDepartment(String receivingDepartment) {
		this.receivingDepartment = receivingDepartment;
	}
	public String getVitalSign() {
		return vitalSign;
	}
	public void setVitalSign(String vitalSign) {
		this.vitalSign = vitalSign;
	}
	public String getReceivingHospital() {
		return receivingHospital;
	}
	public void setReceivingHospital(String receivingHospital) {
		this.receivingHospital = receivingHospital;
	}
	public String getDiagnosis() {
		return diagnosis;
	}
	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getProcedures() {
		return procedures;
	}
	public void setProcedures(String procedures) {
		this.procedures = procedures;
	}
	public String getLaboratory() {
		return laboratory;
	}
	public void setLaboratory(String laboratory) {
		this.laboratory = laboratory;
	}
	public String getClinicalPresentation() {
		return clinicalPresentation;
	}
	public void setClinicalPresentation(String clinicalPresentation) {
		this.clinicalPresentation = clinicalPresentation;
	}
	public String getOthers() {
		return others;
	}
	public void setOthers(String others) {
		this.others = others;
	}
	
	
	
}
