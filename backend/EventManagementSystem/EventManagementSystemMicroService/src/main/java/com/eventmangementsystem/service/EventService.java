package com.eventmangementsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmangementsystem.dao.EventDAO;
import com.eventmangementsystem.entity.Event;

@Service
public class EventService {

    @Autowired
    private EventDAO eventDAO; // Event DAO

    public List<Event> getAllEvents() {
        return eventDAO.getAllEvents(); // Get all events
    }

    public Event getEvent(int eventId) {
        return eventDAO.getEvent(eventId); // Get event by ID
    }

    public void createEvent(Event event) {
        eventDAO.createEvent(event); // Create new event
    }

    public Event updateEvent(int eventId, Event updatedEvent) {
        Event existingEvent = eventDAO.getEvent(eventId);
        if (existingEvent != null) {
            existingEvent.setName(updatedEvent.getName());
            existingEvent.setLocation(updatedEvent.getLocation());
            existingEvent.setTicketPrice(updatedEvent.getTicketPrice());
            return eventDAO.updateEvent(existingEvent); // Update event
        }
        return null;
    }

    public void removeEvent(int eventId) {
        eventDAO.removeEvent(eventId); // Delete event
    }
}