package com.eventmangentsystem.dao;

import com.eventmangentsystem.entity.User;
import com.eventmangentsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDAO {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
    
    public User getUser(int userId) {
        return userRepository.findById(userId).orElse(null);
    }



    public void createUser(User user) {
        userRepository.save(user);
    }

    public User updateUser(int userId, User user) {
        if (userRepository.existsById(userId)) {
            user.setUserId(userId);
            return userRepository.save(user);
        } else {
            return null; // Or throw an exception if needed
        }
    }

    public void removeUser(int userId) {
        userRepository.deleteById(userId);
    }
}
