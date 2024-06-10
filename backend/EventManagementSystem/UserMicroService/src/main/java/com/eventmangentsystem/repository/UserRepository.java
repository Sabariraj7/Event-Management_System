package com.eventmangentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmangentsystem.entity.User;


public interface UserRepository extends JpaRepository<User,Integer>{
	User findByUserName(String userName);
}
