package com.eventmanagement.booking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmanagement.booking.dao.BookingDAO;
import com.eventmanagement.booking.entity.Booking;

@Service
public class BookingService {
    @Autowired
    private BookingDAO bookingDAO;

    public List<Booking> getAllBooking() {
        return bookingDAO.getAllBookings();
    }

    public Booking getBooking(int bookingId) {
        return bookingDAO.getBooking(bookingId);
    }

    public void createBooking(Booking booking) {
    	bookingDAO.createBooking(booking);
    }

    public Booking updateBooking(int eventId, Booking updatedBooking) {
        Booking existingBooking = bookingDAO.getBooking(eventId);
        if (existingBooking != null) {
            // Update fields of the existing event
        	existingBooking.setCustomername(updatedBooking.getCustomername());
        	existingBooking.setNumberoftickets(updatedBooking.getNumberoftickets());
        	//existingBooking.setTicketPrice(updatedEvent.getTicketPrice());
            // Update other fields as needed

            // Delegate saving to DAO
            return bookingDAO.updateBooking(existingBooking);
        }
        return null; // Or throw an exception
    }

    public void removeBooking(int eventId) {
    	bookingDAO.removeBooking(eventId);
    }
}