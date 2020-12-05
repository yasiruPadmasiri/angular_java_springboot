package com.yasiuruPadmasiri.rest.webservice.restfulwebservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController

public class HelloWorldController {
	
	@GetMapping( path="/hello-world")
	
	public String helloWorld() {
		return "hello world";
	}

	
	//hello world-bean
	@GetMapping( path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException(" Some errors happens ! Contact happens at****");
		
	return new HelloWorldBean("hello world-changed");
	
	}
	
	//hello world-bean/path-varible/yairuPadmasiri
	@GetMapping( path="/hello-world-bean/path-varible/{name}")
	public HelloWorldBean helloWorldBeanPathVarible(@PathVariable String name) {
		return new HelloWorldBean(String.format("hello world %s", name));
	}
}
