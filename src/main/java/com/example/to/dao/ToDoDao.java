package com.example.to.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.to.entity.ToDo;

@Mapper
public interface ToDoDao {

	@Select("select * from todo where userId=#{userId} AND IsDeleted=0")   
	List<ToDo> getToDoList(int userId);
	
	@Insert("insert into todo values (default, #{userId}, #{categoryId}, #{title}, #{description}, #{status}, #{due_date}, #{priority}, default, default, default)")
	void insertToDo(ToDo todo);
	
	@Update("update todo set title=#{title}, description=#{description}, status=#{status}, due_date=#{due_date}, priority=#{priority}, categoryId=#{categoryId}, updatedAt=CURRENT_TIMESTAMP where id=#{id}")  
	void updateToDo(ToDo todo);
	
	@Update("update todo set isDeleted=1, updatedAt=CURRENT_TIMESTAMP where id=#{id}")
	void deleteToDo(int id);
	
	@Update("update todo set status=#{status}, updatedAt=CURRENT_TIMESTAMP where id=#{id}")
	void completedToDo(ToDo todo);
	
	@Select("select * from todo where userId=#{userId} AND isDeleted=0 AND status='PENDING'")   
	List<ToDo> getStatusPENDINGToDoList(int userId);
	
	@Update("update todo set status=#{status}, updatedAt=CURRENT_TIMESTAMP where id=#{id}")
	void statusIN_PROGRESSToDo(ToDo todo);
}