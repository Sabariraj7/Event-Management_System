package com.eventmangementsystem.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eventmangementsystem.entity.Event;
import com.eventmangementsystem.repository.EventRepository;

@Repository
public class EventDAO {

    @Autowired
    private EventRepository eventRepository; // Event repository

    public List<Event> getAllEvents() {
        return eventRepository.findAll(); // Get all events
    }

    public Event getEvent(int eventId) {
        return eventRepository.findById(eventId).orElse(null); // Get event by ID
    }

    public void createEvent(Event event) {
        eventRepository.save(event); // Save new event
    }

    public Event updateEvent(Event event) {
        return eventRepository.save(event); // Update event
    }

    public void removeEvent(int eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null) {
            eventRepository.delete(event); // Delete event
        }
    }
}