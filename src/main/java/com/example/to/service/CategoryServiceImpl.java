package com.example.to.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.example.to.dao.CategoryDao;
import com.example.to.entity.Category;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor   
public class CategoryServiceImpl implements CategoryService{
	private final CategoryDao categoryDao;
	private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

	@Override
	public List<Category> getCategoryList() {
		logger.info("카테고리 조회");
		return categoryDao.getCategoryList();
	}
	
}