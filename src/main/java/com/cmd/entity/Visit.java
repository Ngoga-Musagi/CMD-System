package com.cmd.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;




@Entity
public class Visit {
	
	@Id
	private long id;
	
	@OneToOne
	private Patient patient;
	private String type;
	private Date startDate;
	private Date returnDate;
	
	@OneToOne
	private Hospital Hospital;
	
	
	
}
