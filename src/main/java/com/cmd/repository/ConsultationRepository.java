package com.cmd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmd.entity.Consultation;

public interface ConsultationRepository extends JpaRepository<Consultation, Long>{

}
