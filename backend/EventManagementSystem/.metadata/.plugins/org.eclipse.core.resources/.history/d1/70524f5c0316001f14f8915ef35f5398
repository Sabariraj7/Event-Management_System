package com.eventmangementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId; // Event ID

    @Column(name = "event_name")
    private String name; // Event name

    @Column(name = "location")
    private String location; // Event location

    @Column(name = "ticket_price")
    private int ticketPrice; // Ticket price

    // Getters and Setters
    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(int ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    // Default constructor
    public Event() {
    }

    // Parameterized constructor
    public Event(int eventId, String name, String location, int ticketPrice) {
        this.eventId = eventId;
        this.name = name;
        this.location = location;
        this.ticketPrice = ticketPrice;
    }

    // toString method
    @Override
    public String toString() {
        return "Event [eventId=" + eventId + ", name=" + name + ", location=" + location + ", ticketPrice=" + ticketPrice + "]";
    }
}
