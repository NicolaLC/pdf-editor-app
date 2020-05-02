package com.pdfeditor.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SignatureController {
    private final Repository repository;

    SignatureController(Repository repository) {
        this.repository = repository;
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/signatures/all")
    List<Signature> all() {
        return repository.findAll();
    }

}