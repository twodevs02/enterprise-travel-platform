package com.travel_platform.travel_platform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class Demo {
    @GetMapping("/")
    public String getMethodName() {
        return "new String()";
    }

}
