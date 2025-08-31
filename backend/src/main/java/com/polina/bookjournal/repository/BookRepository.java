package com.polina.bookjournal.repository;

import com.polina.bookjournal.model.Book;
import com.polina.bookjournal.model.BookStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {
    List<Book> findByStatus(BookStatus status);

    List<Book> findByAuthor(String author);
}