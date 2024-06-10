package com.eventmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.eventmangementsystem.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    // Additional query methods can be defined here if needed
}
