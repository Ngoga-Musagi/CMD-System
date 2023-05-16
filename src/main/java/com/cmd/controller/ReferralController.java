package com.cmd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cmd.entity.Patient;
import com.cmd.entity.Referral;
import com.cmd.service.ReferralService;

@RestController
@RequestMapping("/cmds/referrals")
public class ReferralController {

	@Autowired
	private ReferralService referralService;
	@GetMapping("/welcome")
	public String welcome() {
		
		return "Welcome to Referrals";
	}
	
	@PostMapping("/add")
	public String registerReferral(@RequestBody Referral referral) {
		referralService.addReferral(referral);
		return "Referral added system";
	}
}
