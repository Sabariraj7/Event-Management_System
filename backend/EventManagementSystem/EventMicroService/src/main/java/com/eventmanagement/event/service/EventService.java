package com.eventmanagement.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.eventmanagement.event.dao.EventDAO;
import com.eventmanagement.event.entity.Event;

@Service
public class EventService {
    @Autowired
    private EventDAO eventDAO;

    public List<Event> getAllEvents() {
        return eventDAO.getAllEvents();
    }

    public Event getEvent(int eventId) {
        return eventDAO.getEvent(eventId);
    }

    public void createEvent(Event event) {
        eventDAO.createEvent(event);
    }

    public Event updateEvent(int eventId, Event updatedEvent) {
        Event existingEvent = eventDAO.getEvent(eventId);
        if (existingEvent != null) {
            // Update fields of the existing event
            existingEvent.setName(updatedEvent.getName());
            existingEvent.setLocation(updatedEvent.getLocation());
            existingEvent.setTicketPrice(updatedEvent.getTicketPrice());
            // Update other fields as needed

            // Delegate saving to DAO
            return eventDAO.updateEvent(existingEvent);
        }
        return null; // Or throw an exception
    }

    public void removeEvent(int eventId) {
        eventDAO.removeEvent(eventId);
    }
}