package com.eventmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmangementsystem.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
}