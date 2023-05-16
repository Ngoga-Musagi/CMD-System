package com.cmd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmd.entity.Patient;
import com.cmd.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository repository;
	
	public String addPatient(Patient patient) {
        
        repository.save(patient);
        return "pateint added to system ";
    }
	
	public List<Patient> getAll(){
		
		return repository.findAll();
	}
	
	public Patient findPatientByNid(String nid) {
		return repository.findByNationalId(nid).get();
	}
}
