package com.eventmanagement.booking.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private int bookingid;
	@Column(name = "event_id")
	private int eventId;
	@Column(name = "event_name")
	private String eventName;
	@Column(name = "customer_name")
	private String customername;
	@Column(name = "customer_number", unique = true)
	private String customernumber;
	@Column(name = "tot_tickets")
	private int numberoftickets;
	@Column(name = "booking_status")
	private boolean bookingstatus;
	@Column(name = "role")
	private String role;
	
	
	

	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public int getBookingid() {
		return bookingid;
	}
	
	
	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}
	
	
	public int getEventId() {
		return eventId;
	}
	
	
	public void setEventId(int eventId) {
		this.eventId = eventId;
	}
	
	@Override
	public String toString() {
		return "Booking [eventid=" + eventId + ", eventName=" + eventName + ", customername=" + customername
				+ ", customernumber=" + customernumber + ", numberoftickets=" + numberoftickets + ", bookingstatus="
				+ bookingstatus + "]";
	}


	public int getEventd() {
		return eventId;
	}


	public void setEventid(int eventId) {
		this.eventId = eventId;
	}


	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public String getCustomername() {
		return customername;
	}


	public void setCustomername(String customername) {
		this.customername = customername;
	}


	public String getCustomernumber() {
		return customernumber;
	}


	public void setCustomernumber(String customernumber) {
		this.customernumber = customernumber;
	}


	public int getNumberoftickets() {
		return numberoftickets;
	}


	public void setNumberoftickets(int numberoftickets) {
		this.numberoftickets = numberoftickets;
	}


	public boolean isBookingstatus() {
		return bookingstatus;
	}


	public void setBookingstatus(boolean bookingstatus) {
		this.bookingstatus = bookingstatus;
	}


	public Booking() {
		
	}
	
	
	
}