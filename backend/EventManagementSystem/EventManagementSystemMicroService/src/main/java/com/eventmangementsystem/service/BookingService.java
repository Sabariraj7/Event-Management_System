package com.eventmangementsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmangementsystem.dao.BookingDAO;
import com.eventmangementsystem.entity.Booking;
import com.eventmangementsystem.entity.BookingDTO;
import com.eventmangementsystem.entity.Event;
import com.eventmangementsystem.entity.PaymentDTO;
import com.eventmangementsystem.entity.User;
import com.eventmangementsystem.repository.EventRepository;
import com.eventmangementsystem.repository.UserRepository;

@Service
public class BookingService {
    @Autowired
    private BookingDAO bookingDAO;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;
    
    // Retrieve all bookings
    public List<Booking> getAllBookings() {
        return bookingDAO.getAllBookings();
    }

    // Retrieve a booking by ID
    public Booking getBooking(int bookingId) {
        return bookingDAO.getBooking(bookingId);
    }

    // Create a new booking
    public PaymentDTO createBooking(BookingDTO bookingDTO) {
        // Retrieve event by ID
        Event event = eventRepository.findById(bookingDTO.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));
        
        // Retrieve user by ID
        User user = userRepository.findById(bookingDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        // Create new booking
        Booking booking = new Booking();
        booking.setEvent(event); // Set event associated with the booking
        booking.setEventName(bookingDTO.getEventName()); // Set event name
        booking.setUser(user); // Set user associated with the booking
        booking.setCustomername(bookingDTO.getCustomerName()); // Set customer name
        booking.setCustomernumber(bookingDTO.getCustomerNumber()); // Set customer number
        booking.setNumberoftickets(bookingDTO.getNumberOfTickets()); // Set number of tickets
        booking.setBookingstatus(bookingDTO.getBookingStatus()); // Set booking status
        booking.setRole(bookingDTO.getRole()); // Set role of the user making the booking
        booking.setAmount(bookingDTO.getAmount());
        // Save the booking
        bookingDAO.createBooking(booking);
        PaymentDTO paymentDTO = new PaymentDTO();
        paymentDTO.setUserId(bookingDTO.getUserId());
        paymentDTO.setBookingId(booking.getBookingid());
        paymentDTO.setAmount(booking.getAmount());
        paymentDTO.setCustomerName(booking.getCustomername());
        paymentDTO.setNumberOfTickets(booking.getNumberoftickets());
        
        //System.out.print(booking);
		return paymentDTO;
    }

    // Update an existing booking
    public Booking updateBooking(int bookingId, Booking updatedBooking) {
        return bookingDAO.updateBooking(updatedBooking);
    }

    // Remove a booking
    public void removeBooking(int bookingId) {
        bookingDAO.removeBooking(bookingId);
    }
}
