 package com.yasiuruPadmasiri.rest.webservice.restfulwebservice.todo;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.yasiuruPadmasiri.rest.webservice.restfulwebservice.todo.Todo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {
	@Autowired
	private TodoHardcodedService  todoService;
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAlltodos(@PathVariable String username){
		return todoService.findAll(); 
		
	}
}
  