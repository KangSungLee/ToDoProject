package com.example.to.controller;

import com.example.to.entity.Category;
import com.example.to.service.CategoryService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/categorys")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> getCategoryList() {
        try {
            List<Category> category = categoryService.getCategoryList();
            return ResponseEntity.ok(category);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Collections.emptyList());
        }
    }



}