package com.cmd.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hospital {

	@Id
	private long id;
	private String name;
	private String location;
	
	
}
