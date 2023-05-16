package com.cmd.entity;



import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;


@Entity
public class Patient {
	

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long patientId;
		
		private String nationalId;
		private String firstName;
		private String lastName;
		private LocalDate dob;
		private String location;
		private String phone;
		private String religion;
		private LocalDate createdAt;
		
		@OneToOne(mappedBy = "patientId")
		private Referral referral;
		
		@OneToOne(mappedBy = "patient")
		private Visit visit;
		
		
		
		
		public Patient() {
			this.createdAt=LocalDate.now();
		}
		public Patient(long patientId, String nationalId, String firstName, String lastName, LocalDate dob, String location,
				String phone, String religion, LocalDate createdAt) {
			
			this.patientId = patientId;
			this.nationalId = nationalId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.dob = dob;
			this.location = location;
			this.phone = phone;
			this.religion = religion;
			this.createdAt = createdAt;
		}
		public long getPatientId() {
			return patientId;
		}
		public void setPatientId(long patientId) {
			this.patientId = patientId;
		}
		public String getNationalId() {
			return nationalId;
		}
		public void setNationalId(String nationalId) {
			this.nationalId = nationalId;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public LocalDate getDob() {
			return dob;
		}
		public void setDob(LocalDate dob) {
			this.dob = dob;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getReligion() {
			return religion;
		}
		public void setReligion(String religion) {
			this.religion = religion;
		}
		public LocalDate getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(LocalDate createdAt) {
			this.createdAt = createdAt;
		}
		
}
