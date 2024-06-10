package com.eventmanagement.api.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
//@CrossOrigin(origins = "http://127.0.0.1:5500/")
public class APIConfig {
	@Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("EventManagementSystemMicroService", r -> r
                .path("/event/**")
                .uri("http://localhost:8081"))
            .route("EventManagementSystemMicroService", r -> r
                .path("/booking/**")
                .uri("http://localhost:8081"))
        	.route("EventManagementSystemMicroService", r -> r 
    			.path("/user/**")
    			.uri("http://localhost:8081"))
        	.route("EventManagementSystemMicroService.payment", r -> r 
        			.path("/payments/**")
        			.uri("http://localhost:8082"))
        	.route("EventManagementSystemMicroService", r -> r 
        			.path("/discount/**")
        			.uri("http://localhost:8081"))
        	.route("EventManagementSystemMicroService", r -> r 
        			.path("/roles/**")
        			.uri("http://localhost:8081"))
        	.build();
    }
	
}
 