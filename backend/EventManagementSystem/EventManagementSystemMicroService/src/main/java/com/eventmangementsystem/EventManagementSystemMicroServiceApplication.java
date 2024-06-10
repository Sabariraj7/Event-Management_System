package com.eventmangementsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EventManagementSystemMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventManagementSystemMicroServiceApplication.class, args);
	}

}
