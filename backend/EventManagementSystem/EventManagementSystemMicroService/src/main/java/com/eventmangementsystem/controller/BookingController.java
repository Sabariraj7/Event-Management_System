package com.eventmangementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.eventmangementsystem.entity.Booking;
import com.eventmangementsystem.entity.BookingDTO;
import com.eventmangementsystem.entity.PaymentDTO;
import com.eventmangementsystem.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Retrieve all bookings
    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Retrieve a booking by ID
    @GetMapping("/{bookingId}")
    public Booking getBooking(@PathVariable int bookingId) {
        return bookingService.getBooking(bookingId);
    }

    // Create a new booking
    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public PaymentDTO createBooking(@RequestBody BookingDTO booking) {
        return bookingService.createBooking(booking);
    }

    // Update an existing booking
    @PutMapping("/update/{bookingId}")
    public Booking updateBooking(@PathVariable int bookingId, @RequestBody Booking booking) {
        return bookingService.updateBooking(bookingId, booking);
    }

    // Remove a booking
    @DeleteMapping("/delete/{bookingId}")
    public void removeBooking(@PathVariable int bookingId) {
        bookingService.removeBooking(bookingId);
    }
}