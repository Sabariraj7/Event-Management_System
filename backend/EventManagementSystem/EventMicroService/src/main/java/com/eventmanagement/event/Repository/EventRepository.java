package com.eventmanagement.event.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.entity.Event;

public interface EventRepository extends JpaRepository<Event,Integer> {

}
