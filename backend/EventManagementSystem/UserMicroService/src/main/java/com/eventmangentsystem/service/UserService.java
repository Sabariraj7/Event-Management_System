package com.eventmangentsystem.service;

import com.eventmangentsystem.dao.UserDAO;
import com.eventmangentsystem.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    public User getUserByUserName(String userName) {
        return userDAO.getUserByUserName(userName);
    }
    
    public User getUser(int userId) {
        return userDAO.getUser(userId);
    }

    public void createUser(User user) {
        userDAO.createUser(user);
    }

    public User updateUser(int userId, User user) {
        return userDAO.updateUser(userId, user);
    }

    public void removeUser(int userId) {
        userDAO.removeUser(userId);
    }
}
