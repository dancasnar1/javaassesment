package com.azure.danieljava.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.azure.danieljava.model.User;
import com.azure.danieljava.repository.UserRepository;

 

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void save(User user) {
    	userRepository.save(user);
    }
}
