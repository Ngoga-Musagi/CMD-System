package com.cmd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmd.entity.Referral;
import com.cmd.repository.ReferralRepository;

@Service
public class ReferralService {
	
	@Autowired
	private ReferralRepository repository;
	
	
	public String addReferral(Referral referral) {
        
        repository.save(referral);
        return "pateint added to system ";
    }

}
