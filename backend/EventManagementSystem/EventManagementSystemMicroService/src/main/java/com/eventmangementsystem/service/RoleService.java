package com.eventmangementsystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmangementsystem.dao.RoleDAO;
import com.eventmangementsystem.entity.Role;

@Service
public class RoleService {
    
    @Autowired
    private RoleDAO roleDao;
    
    public List<Role> getAllRoles() {
        return roleDao.getAllRoles();
    }
    
    public Optional<Role> getRoleById(int roleId) {
        return roleDao.getRoleById(roleId);
    }
    
    public Role saveRole(Role role) {
        return roleDao.saveRole(role);
    }
    
    public void deleteRoleById(int roleId) {
        roleDao.deleteRoleById(roleId);
    }
    
    public Role updateRole(Role role) {
        return roleDao.updateRole(role);
    }
}
