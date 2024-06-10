package com.eventmangementsystem.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private int bookingid;
    
    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id")
    private Event event;
    
    @Column(name = "event_name")
    private String eventName;
    //private int eventId;
    


	@Column(name = "customer_name")
    private String customername;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @Column(name = "customer_number")
    private String customernumber;

    @Column(name = "tot_tickets")
    private int numberoftickets;

    @Column(name = "booking_status")
    private boolean bookingstatus;

    @Column(name = "role")
    private String role;

    // Getters and setters
    public String getEventName() {
    	return eventName;
    }
    
    public void setEventName(String eventName) {
    	this.eventName = eventName;
    }
    
    
    
//    public int getEventId() {
//    	return eventId;
//    }
//    
//    public void setEventId(int eventId) {
//    	this.eventId = eventId;
//    }
    

    public int getBookingid() {
        return bookingid;
    }

    public void setBookingid(int bookingid) {
        this.bookingid = bookingid;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
    }

    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "Booking [bookingid=" + bookingid + ", event=" + event + ", customername=" + customername
                + ", customernumber=" + customernumber + ", numberoftickets=" + numberoftickets + ", bookingstatus="
                + bookingstatus + ", role=" + role + "]";
    }

    public Booking() {
    }
}
