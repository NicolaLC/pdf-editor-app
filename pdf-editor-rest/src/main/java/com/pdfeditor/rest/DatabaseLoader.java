package com.pdfeditor.rest;
import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class DatabaseLoader {
    @Bean
    CommandLineRunner initDatabase(Repository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new Signature("Mario", "Rossi")));
            log.info("Preloading " + repository.save(new Signature("Elisa", "Bianchi")));
            log.info("Preloading " + repository.save(new Signature("Alice", "Rossi")));
            log.info("Preloading " + repository.save(new Signature("Nicola", "Romeo")));
        };
    }
}


