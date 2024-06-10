package com.eventmangementsystem.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eventmangementsystem.entity.Booking;
import com.eventmangementsystem.repository.BookingRepository;

@Repository
public class BookingDAO {
    @Autowired
    private BookingRepository bookingRepository;
    
    
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBooking(int bookingId) {
    	
        return bookingRepository.findById(bookingId).orElse(null);
        
        
    }

    public void createBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public Booking updateBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public void removeBooking(int bookingId) {
        Booking booking = bookingRepository.findById(bookingId).orElse(null);
        if (booking != null) {
            bookingRepository.delete(booking);
        }
    }
}

