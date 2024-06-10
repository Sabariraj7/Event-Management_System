package com.eventmangentsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.eventmangentsystem.entity.Payment;
import com.eventmangentsystem.dao.PaymentDAO;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentDAO paymentDAO;

    public Payment savePayment(Payment payment) {
        return paymentDAO.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentDAO.findAll();
    }

    public Optional<Payment> getPaymentById(int paymentId) {
        return paymentDAO.findById(paymentId);
    }

    public void deletePayment(int paymentId) {
        paymentDAO.deleteById(paymentId);
    }
}
