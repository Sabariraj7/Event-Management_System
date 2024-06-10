package com.eventmangementsystem.entity;

public class PaymentDTO {
	
	private int bookingId;
	
	private int userId;
	
	private String customerName;
	
	private int numberOfTickets;
	
	private int amount;

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
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

	public int getNumberOfTickets() {
		return numberOfTickets;
	}

	public void setNumberOfTickets(int numberOfTickets) {
		this.numberOfTickets = numberOfTickets;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "PaymentDTO [bookingId=" + bookingId + ", userId=" + userId + ", customerName=" + customerName
				+ ", numberOfTickets=" + numberOfTickets + ", amount=" + amount + "]";
	}
	
	
	public PaymentDTO(int bookingId, int userId, String customerName, int numberOfTickets, int amount) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.customerName = customerName;
		this.numberOfTickets = numberOfTickets;
		this.amount = amount;
	}

	public PaymentDTO() {
		
	}
}
