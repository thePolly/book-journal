package com.polina.bookjournal.controller;

import com.polina.bookjournal.model.Book;
import com.polina.bookjournal.model.BookStatus;
import com.polina.bookjournal.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
public class BookController {

    private final BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks( @RequestParam(required = false) BookStatus status,
    @RequestParam(required = false) String author
    ) {
        if (status != null) {
            return bookRepository.findByStatus(status);
        }
        if (author!= null) {
            return bookRepository.findByAuthor(author);
        }
        return bookRepository.findAll();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }


    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable UUID id) {
        bookRepository.deleteById(id);
    }

}
