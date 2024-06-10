package com.eventmangementsystem.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.eventmangementsystem.entity.Event;
import com.eventmangementsystem.service.EventService;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService; // Event service

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents(); // Get all events
    }

    @GetMapping("/{eventId}")
    public Event getEvent(@PathVariable int eventId) {
        return eventService.getEvent(eventId); // Get event by ID
    }

    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createEvent(@RequestBody Event event) {
        eventService.createEvent(event); // Create new event
    }

    @PutMapping("/update/{eventId}")
    public Event updateEvent(@PathVariable int eventId, @RequestBody Event event) {
        return eventService.updateEvent(eventId, event); // Update event
    }

    @DeleteMapping("/delete/{eventId}")
    public void removeEvent(@PathVariable int eventId) {
        eventService.removeEvent(eventId); // Delete event
    }
}
