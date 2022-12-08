package com.azure.danieljava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.azure.danieljava.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
