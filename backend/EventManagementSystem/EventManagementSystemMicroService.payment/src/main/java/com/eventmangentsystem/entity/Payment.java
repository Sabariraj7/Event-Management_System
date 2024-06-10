 package com.eventmangentsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int paymentId;
	
	@Column(name="booking_id")
	private int bookingId;
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="customer_name")
	private String customerName;
	
	@Column(name="number_of_tickets")
	private int numberOfTickets;
	
	@Column(name="amount")
	private int amount;
	
	@Column(name="payment_status")
	private Boolean paymentStatus;

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

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

	public Boolean getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(Boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", bookingId=" + bookingId + ", userId=" + userId + ", customerName="
				+ customerName + ", numberOfTickets=" + numberOfTickets + ", amount=" + amount + ", paymentStatus="
				+ paymentStatus + "]";
	}
	
	
	
	public Payment(int paymentId, int bookingId, int userId, String customerName, int numberOfTickets, int amount,
			Boolean paymentStatus) {
		super();
		this.paymentId = paymentId;
		this.bookingId = bookingId;
		this.userId = userId;
		this.customerName = customerName;
		this.numberOfTickets = numberOfTickets;
		this.amount = amount;
		this.paymentStatus = paymentStatus;
	}

	public Payment() {
		
	}
	
	
}
