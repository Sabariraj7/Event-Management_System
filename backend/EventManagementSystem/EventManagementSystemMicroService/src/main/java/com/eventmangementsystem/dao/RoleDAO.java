package com.eventmangementsystem.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.eventmangementsystem.entity.Role;
import com.eventmangementsystem.repository.RoleRepository;

@Component
public class RoleDAO {
    
    @Autowired
    private RoleRepository roleRepository;
    
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
    
    public Optional<Role> getRoleById(int roleId) {
        return roleRepository.findById(roleId);
    }
    
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }
    
    public void deleteRoleById(int roleId) {
        roleRepository.deleteById(roleId);
    }
    
    public Role updateRole(Role role) {
        return roleRepository.save(role);
    }
}
