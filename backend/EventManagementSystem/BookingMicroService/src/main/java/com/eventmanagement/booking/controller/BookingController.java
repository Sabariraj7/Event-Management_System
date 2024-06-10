package com.eventmanagement.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.eventmanagement.booking.entity.Booking;
import com.eventmanagement.booking.service.BookingService;
import com.sun.jdi.event.Event;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/all")
    public List<Booking> getAllBookings() { 
    	
        return bookingService.getAllBooking();
    }

    @GetMapping("/{bookingId}")
    public Booking getBooking(@PathVariable int bookingId) {
    	
    	
        return bookingService.getBooking(bookingId);
    }

    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createBooking(@RequestBody Booking booking) {
        bookingService.createBooking(booking);
    }

    @PutMapping("/update/{bookingId}")
    public Booking updateBooking(@PathVariable int bookingId, @RequestBody Booking booking) {
        return bookingService.updateBooking(bookingId, booking);
    }

    @DeleteMapping("/delete/{bookingId}")
    public void removeBooking(@PathVariable int bookingId) {
        bookingService.removeBooking(bookingId);
    }
}
