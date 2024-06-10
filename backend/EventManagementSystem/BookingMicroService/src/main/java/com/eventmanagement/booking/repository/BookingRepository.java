package com.eventmanagement.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.booking.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
}