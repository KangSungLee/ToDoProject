package com.example.to.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.example.to.dao.ToDoDao;
import com.example.to.dao.UserDao;
import com.example.to.entity.ToDo;
import com.example.to.security.JwtTokenUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor   
public class ToDoServiceImpl implements ToDoService{
	private final UserDao userDao;
	private final ToDoDao todoDao;
	private static final Logger logger = LoggerFactory.getLogger(ToDoServiceImpl.class);

	@Override
	public List<ToDo> getToDoList(String userToken) {
		String email = JwtTokenUtil.extractEmail(userToken);
		int userId = userDao.getUserByBid(email).getId();
		
		// IN_PROGRESS값 변경 후 업데이트
		List<ToDo> statusToDoList = todoDao.getStatusPENDINGToDoList(userId);
		for (ToDo statusToDo : statusToDoList) {
			if(LocalDateTime.now().isAfter(statusToDo.getDue_date())) {
				statusToDo = statusToDo.toBuilder()
						.status("IN_PROGRESS")
						.build();
				todoDao.statusIN_PROGRESSToDo(statusToDo);
			}
		}
		
		logger.info(userId + "번 유저 ToDo List 조회");
		return todoDao.getToDoList(userId);
	}

	@Override
	public void insertToDo(ToDo todo) {
		String email = JwtTokenUtil.extractEmail(todo.getUserToken());
		int userId = userDao.getUserByBid(email).getId();
		
		LocalDateTime seoulDate = seoulDateChange(todo.getDue_date());
        
		todo = todo.toBuilder()
		        .userId(userId)
		        .due_date(seoulDate)
		        .build();
		todoDao.insertToDo(todo);
	}

	@Override
	public void updateToDo(ToDo todo) {
	    LocalDateTime seoulDate = seoulDateChange(todo.getDue_date());
	    
	    todo = todo.toBuilder()
		        .due_date(seoulDate)
		        .build();
	    todoDao.updateToDo(todo);
	}

	@Override
	public void deleteToDo(int id) {
		todoDao.deleteToDo(id);
	}
	
	@Override
	public void completedToDo(ToDo todo) {
		todoDao.completedToDo(todo);
	}
	
	
	// UTC Date > Seoul Date 변경
	public LocalDateTime seoulDateChange(LocalDateTime dueDate) {
		ZonedDateTime utcZoned = dueDate.atZone(ZoneId.of("UTC"));
	    ZonedDateTime seoulZoned = utcZoned.withZoneSameInstant(ZoneId.of("Asia/Seoul"));
	    return seoulZoned.toLocalDateTime();
	}


}