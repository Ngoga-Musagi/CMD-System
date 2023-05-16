package com.cmd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cmd.entity.Referral;

public interface ReferralRepository extends JpaRepository<Referral, Long>{

}
