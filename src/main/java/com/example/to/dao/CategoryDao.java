package com.example.to.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.to.entity.Category;

@Mapper
public interface CategoryDao {

	@Select("select * from category")   
	List<Category> getCategoryList();
	
}