package com.yasiuruPadmasiri.rest.webservice.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TodoHardcodedService {
	private static List<Todo> todos=new ArrayList<Todo>();
	private static int idCounter=0;
	 
	static {
		
		todos.add(new Todo(++idCounter,"in yasiruPadmasiri","learn to fight",new Date(),false));
		todos.add(new Todo(++idCounter,"in yasiruPadmasiri","learn to Node js",new Date(),false));
		todos.add(new Todo(++idCounter,"in yasiruPadmasiri","learn to Angular",new Date(),false));
		todos.add(new Todo(++idCounter,"in yasiruPadmasiri","learn to Springboot",new Date(),false));
 
	}
	public List<Todo> findAll(){
		return todos; 
	}

}
