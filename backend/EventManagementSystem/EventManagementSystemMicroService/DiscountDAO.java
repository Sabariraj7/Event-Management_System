//package com.eventmangementsystem.dao;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import com.eventmangementsystem.entity.Discount;
//import com.eventmangementsystem.repository.DiscountRepository;
//
//@Component
//public class DiscountDAO {
//
//    @Autowired
//    private DiscountRepository discountRepository;
//
//    public List<Discount> getAllDiscounts() {
//        return discountRepository.findAll();
//    }
//
//    public Optional<Discount> getDiscountById(int id) {
//        return discountRepository.findById(id);
//    }
//
//    public Discount saveDiscount(Discount discount) {
//        return discountRepository.save(discount);
//    }
//
//    public void deleteDiscount(int id) {
//        discountRepository.deleteById(id);
//    }
//}
