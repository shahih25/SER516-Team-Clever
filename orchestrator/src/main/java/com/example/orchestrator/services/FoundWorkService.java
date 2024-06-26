package com.example.orchestrator.services;

import com.example.orchestrator.models.AuthModel;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.net.URI;

@Service
public class FoundWorkService {
    WebClient webClient;

    String authUrl = "http://foundwork:8080/api";

    public FoundWorkService() {
        this.webClient = WebClient.create();
    }

    public String getFoundWork(Integer milestoneID, String token) {
        URI uri = URI.create(authUrl + "/foundWork/" + milestoneID);
        return webClient.get()
                .uri(uri)
                .header("token", token)
                .retrieve()
                .bodyToMono(String.class).block();
    }
}
