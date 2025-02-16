package com.example.to.controller;

import com.example.to.entity.ToDo;
import com.example.to.service.ToDoService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
public class ToDoController {
    private final ToDoService toDoService;

    // 할 일 목록 가져오기 GET 요청
    @GetMapping
    public ResponseEntity<List<ToDo>> getToDoList(@RequestParam("userToken") String userToken) {
        try {
            List<ToDo> todos = toDoService.getToDoList(userToken);
            return ResponseEntity.ok(todos);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Collections.emptyList());
        }
    }

    // 새 할 일 추가 POST 요청
    @PostMapping
    public ResponseEntity<String> addToDo(@RequestBody ToDo toDo) {
        try {
            toDoService.insertToDo(toDo); 
            return ResponseEntity.ok("할 일 추가 완료");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    // 할 일 수정 PUT 요청
    @PutMapping
    public ResponseEntity<String> UpdateToDo(@RequestBody ToDo toDo) {
        try {
        	if (toDo.getCategoryId() != 0) {
        		toDoService.updateToDo(toDo);
        	} else {
        		toDoService.completedToDo(toDo);
        	}
            return ResponseEntity.ok("할 일 수정 완료");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    // 할 일 삭제 Delete 요청
    @DeleteMapping
    public ResponseEntity<String> DeleteToDo(@RequestParam("id") int id) {
    	System.out.println(id);
        try {
        	toDoService.deleteToDo(id);
            return ResponseEntity.ok("할 일 삭제 완료");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}