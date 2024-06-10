//package com.eventmangementsystem.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.eventmangementsystem.dao.DiscountDAO;
//import com.eventmangementsystem.entity.Discount;
//
//@Service
//public class DiscountService {
//
//    @Autowired
//    private DiscountDAO discountDao;
//
//    public List<Discount> getAllDiscounts() {
//        return discountDao.getAllDiscounts();
//    }
//
//    public Optional<Discount> getDiscountById(int id) {
//        return discountDao.getDiscountById(id);
//    }
//
//    public Discount saveDiscount(Discount discount) {
//        return discountDao.saveDiscount(discount);
//    }
//
//    public void deleteDiscount(int id) {
//        discountDao.deleteDiscount(id);
//    }
//}
