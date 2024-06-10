package com.eventmanagement.event.entity;

import java.security.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "event_id")
	private int eventId;
	
	@Column(name = "event_name")
	private String name;
	
	@Column(name = "location")
	private String Location;
	@Column(name = "ticket_price")
	private int ticketPrice;
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
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	public int getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(int ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
//	public Event(int eventId, String name, String location, Timestamp dateTime, int ticketPrice) {
//		super();
//		this.name = name;
//		Location = location;
//		this.ticketPrice = ticketPrice;
//	}
	
	public Event() {
	}
	public Event(int eventId, String name, String location, int ticketPrice) {
		super();
		this.eventId = eventId;
		this.name = name;
		Location = location;
		this.ticketPrice = ticketPrice;
	}
//	@Override
//	public String toString() {
//		return "BookingEntity [name=" + name + ", Location=" + Location + ",  ticketPrice="
//				+ ticketPrice + "]";
//	}
	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", name=" + name + ", Location=" + Location + ", ticketPrice="
				+ ticketPrice + "]";
	}
}