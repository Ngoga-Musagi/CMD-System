package com.cmd.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmd.entity.Patient;
import com.cmd.entity.User;

public interface PatientRepository extends JpaRepository<Patient, Long> {
	
	Optional<Patient> findByNationalId(String nid);

}
