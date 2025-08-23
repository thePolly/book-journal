package com.polina.bookjournal.repository;

import com.polina.bookjournal.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {
}