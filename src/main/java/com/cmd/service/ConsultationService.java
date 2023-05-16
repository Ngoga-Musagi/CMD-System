package com.cmd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmd.entity.Consultation;
import com.cmd.entity.Patient;
import com.cmd.repository.ConsultationRepository;

@Service
public class ConsultationService {
	
	@Autowired
	private ConsultationRepository repository;

	public String addConsultation(Consultation consultation) {
        
        repository.save(consultation);
        return "Consultation added to system ";
    }
}
