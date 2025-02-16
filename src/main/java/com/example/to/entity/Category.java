package com.example.to.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder 
public class Category {
	private int id;
	private String name;
	private LocalDateTime createdAt;
	private int isDeleted;
}
