package com.eventmangentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmangentsystem.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer> {

}
