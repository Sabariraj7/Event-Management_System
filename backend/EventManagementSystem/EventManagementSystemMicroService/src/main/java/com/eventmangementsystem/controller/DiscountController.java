//package com.eventmangementsystem.controller;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.eventmangementsystem.entity.Discount;
//import com.eventmangementsystem.service.DiscountService;
//
//@RestController
//@RequestMapping("/api/discounts")
//public class DiscountController {
//
//    @Autowired
//    private DiscountService discountService;
//
//    @GetMapping
//    public List<Discount> getAllDiscounts() {
//        return discountService.getAllDiscounts();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Discount> getDiscountById(@PathVariable int id) {
//        Optional<Discount> discount = discountService.getDiscountById(id);
//        return discount.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
//    }
//
//    @PostMapping
//    public Discount createDiscount(@RequestBody Discount discount) {
//        return discountService.saveDiscount(discount);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Discount> updateDiscount(@PathVariable int id, @RequestBody Discount discountDetails) {
//        Optional<Discount> discountOptional = discountService.getDiscountById(id);
//        if (!discountOptional.isPresent()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//
//        Discount discount = discountOptional.get();
//        discount.setDiscountName(discountDetails.getDiscountName());
//        discount.setDiscountPercentage(discountDetails.getDiscountPercentage());
//        discount.setDiscountEligibility(discountDetails.getDiscountEligibility());
//
//        return ResponseEntity.ok(discountService.saveDiscount(discount));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteDiscount(@PathVariable int id) {
//        Optional<Discount> discountOptional = discountService.getDiscountById(id);
//        if (!discountOptional.isPresent()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//
//        discountService.deleteDiscount(id);
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//    }
//}
