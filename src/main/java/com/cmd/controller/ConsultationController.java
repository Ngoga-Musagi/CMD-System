package com.cmd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmd.entity.Consultation;
import com.cmd.service.ConsultationService;

@RestController
@RequestMapping("/cmds/consultation")
public class ConsultationController {

	@Autowired
	private ConsultationService consultationService;
	
	@GetMapping("/welcome")
	public String welcome() {
		
		return "Welcome to Consultation";
	}
	
	@PostMapping("/add")
	public String registerConsultation(@RequestBody Consultation consultation) {
		consultationService.addConsultation(consultation);
		return "Consultation added to the system";
	}
	
}
