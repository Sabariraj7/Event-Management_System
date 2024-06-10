package com.eventmangementsystem.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BookingDTO {
    @JsonProperty("eventId")
    private int eventId;

    @JsonProperty("eventName")
    private String eventName;

    @JsonProperty("userId")
    private int userId;

    @JsonProperty("customername")
    private String customerName;

    @JsonProperty("customernumber")
    private String customerNumber;

    @JsonProperty("numberoftickets")
    private int numberOfTickets;

    @JsonProperty("bookingstatus")
    private Boolean bookingStatus;

    @JsonProperty("role")
    private String role;
    
    public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@JsonProperty("amount")
    private int amount;

    // Default constructor
    public BookingDTO() {}

    // Parameterized constructor
    public BookingDTO(int eventId, String eventName, int userId, String customerName, String customerNumber, int numberOfTickets, Boolean bookingStatus, String role,int amount) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.userId = userId;
        this.customerName = customerName;
        this.customerNumber = customerNumber;
        this.numberOfTickets = numberOfTickets;
        this.bookingStatus = bookingStatus;
        this.role = role;
        this.amount=amount;
    }

    // Getters and setters
    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public int getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public Boolean getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(Boolean bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "BookingDTO{" +
                "eventId=" + eventId +
                ", eventName='" + eventName + '\'' +
                ", userId=" + userId +
                ", customerName='" + customerName + '\'' +
                ", customerNumber='" + customerNumber + '\'' +
                ", numberOfTickets=" + numberOfTickets +
                ", bookingStatus=" + bookingStatus +
                ", role='" + role + '\'' +
                ", amount='" + amount+ '\''+
                '}';
    }
}
