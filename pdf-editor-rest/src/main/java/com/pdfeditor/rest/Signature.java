package com.pdfeditor.rest;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
class Signature {

    private @Id @GeneratedValue Long id;
    private String name;
    private String surname;

    Signature() {}

    Signature(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }
}