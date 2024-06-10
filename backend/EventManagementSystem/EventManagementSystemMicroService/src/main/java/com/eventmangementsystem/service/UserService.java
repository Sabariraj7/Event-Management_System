package com.eventmangementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmangementsystem.dao.UserDAO;
import com.eventmangementsystem.entity.User;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    // Get all users
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    // Get a user by username
    public User getUserByUserName(String userName) {
        return userDAO.getUserByUserName(userName);
    }

    // Get a user by ID
    public User getUser(int userId) {
        return userDAO.getUser(userId);
    }

    // Create a new user
    public void createUser(User user) {
        userDAO.createUser(user);
    }

    // Update an existing user
    public User updateUser(int userId, User user) {
        return userDAO.updateUser(userId, user);
    }

    // Delete a user
    public void removeUser(int userId) {
        userDAO.removeUser(userId);
    }
}
