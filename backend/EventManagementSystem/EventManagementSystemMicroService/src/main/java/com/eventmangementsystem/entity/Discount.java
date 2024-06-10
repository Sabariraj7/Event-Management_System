//package com.eventmangementsystem.entity;
//
//import java.sql.Timestamp; // Corrected import for Timestamp
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Column;
//
//@Entity(name = "discount")
//public class Discount {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int discountId;
//    
//    @Column(name = "discount_name", nullable = false)
//    private String discountName;
//    
//    @Column(name = "discount_percentage", nullable = false)
//    private int discountPercentage;
//    
//    @Column(name = "discount_eligibility", nullable = false)
//    private int discountEligibility;
//    
//    
//    
//    public int getDiscountId() {
//		return discountId;
//	}
//
//
//
//	public void setDiscountId(int discountId) {
//		this.discountId = discountId;
//	}
//
//
//
//	public String getDiscountName() {
//		return discountName;
//	}
//
//
//
//	public void setDiscountName(String discountName) {
//		this.discountName = discountName;
//	}
//
//
//
//	public int getDiscountPercentage() {
//		return discountPercentage;
//	}
//
//
//
//	public void setDiscountPercentage(int discountPercentage) {
//		this.discountPercentage = discountPercentage;
//	}
//
//
//
//	public int getDiscountEligibility() {
//		return discountEligibility;
//	}
//
//
//
//	public void setDiscountEligibility(int discountEligibility) {
//		this.discountEligibility = discountEligibility;
//	}
//	
//
//
//	@Override
//	public String toString() {
//		return "Discount [ discountName=" + discountName + ", discountPercentage="
//				+ discountPercentage + ", discountEligibility=" + discountEligibility + "]";
//	}
//
//
//
//	public Discount() {
//    	
//    }
//}
