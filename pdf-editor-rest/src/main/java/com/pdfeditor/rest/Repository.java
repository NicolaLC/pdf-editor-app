package com.pdfeditor.rest;

import org.springframework.data.jpa.repository.JpaRepository;

interface Repository extends JpaRepository<Signature, Long> {

}