package com.eventmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmangementsystem.entity.Event;


public interface EventRepository extends JpaRepository<Event,Integer> {

}
