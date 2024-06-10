package com.eventmangementsystem.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.eventmangementsystem.entity.User;
import com.eventmangementsystem.repository.UserRepository;

import java.util.List;

@Component
public class UserDAO {

    @Autowired
    private UserRepository userRepository;

    /**
     * Retrieve all users from the database.
     *
     * @return List of all users.
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Retrieve a user by their username.
     *
     * @param userName The username of the user.
     * @return The User object if found, otherwise null.
     */
    public User getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    /**
     * Retrieve a user by their ID.
     *
     * @param userId The ID of the user.
     * @return The User object if found, otherwise null.
     */
    public User getUser(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    /**
     * Save a new user to the database.
     *
     * @param user The User object to be saved.
     */
    public void createUser(User user) {
        userRepository.save(user);
    }

    /**
     * Update an existing user in the database.
     *
     * @param userId The ID of the user to be updated.
     * @param user   The updated User object.
     * @return The updated User object if the user exists, otherwise null.
     */
    public User updateUser(int userId, User user) {
        if (userRepository.existsById(userId)) {
            user.setUserId(userId);
            return userRepository.save(user);
        } else {
            return null; // Or throw an exception if needed
        }
    }

    /**
     * Remove a user from the database by their ID.
     *
     * @param userId The ID of the user to be removed.
     */
    public void removeUser(int userId) {
        userRepository.deleteById(userId);
    }
}
