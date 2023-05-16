package com.cmd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmd.entity.Patient;
import com.cmd.service.PatientService;

@RestController
@RequestMapping("/cmds/patients")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@GetMapping("/welcome")
	public String welcome() {
		
		return "Welcome to Patients";
	}
	
	@GetMapping("/all")
	public List<Patient> allPatient(){
		
		return patientService.getAll();
	}
	
	@PostMapping("/add")
	public String registerPatient(@RequestBody Patient patient) {
		patientService.addPatient(patient);
		return "";
	}
	
	@GetMapping("/{nid}")
	public Patient getPatientByNid(@PathVariable String nid) {
		return patientService.findPatientByNid(nid);
	}
}
