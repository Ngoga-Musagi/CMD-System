package com.cmd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmd.entity.Visit;

public interface VisitRepository extends JpaRepository<Visit, Long>{

}
