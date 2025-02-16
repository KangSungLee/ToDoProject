package com.example.to.service;

import java.util.List;

import com.example.to.entity.ToDo;

public interface ToDoService {
	
	List<ToDo> getToDoList(String userToken);   
	
	void insertToDo(ToDo todo); 
	
	void updateToDo(ToDo todo); 
	
	void deleteToDo(int id);
	
	void completedToDo(ToDo todo);
	
}