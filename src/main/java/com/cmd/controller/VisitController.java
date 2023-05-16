package com.cmd.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cmds/visits")
public class VisitController {

	@GetMapping("/welcome")
	public String welcome() {
		
		return "Welcome to visits";
	}
}
