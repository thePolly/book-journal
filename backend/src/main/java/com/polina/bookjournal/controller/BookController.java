package com.polina.bookjournal.controller;

import com.polina.bookjournal.model.Book;
import com.polina.bookjournal.model.BookStatus;
import com.polina.bookjournal.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

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

    @GetMapping("/finished")
    public List<Book> getBooksFinishedBetween(
            @RequestParam LocalDate from,
            @RequestParam LocalDate to) {
        return bookRepository.findByFinishDateBetween(from, to);
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }


    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable UUID id) {
        bookRepository.deleteById(id);
    }

    @PatchMapping("/{id}")
    public Book updateBook(@PathVariable UUID id, @RequestBody Map<String, Object> updates) {
        Book book = bookRepository.findById(id).orElseThrow();

        if (updates.containsKey("status")) {
            book.setStatus(BookStatus.valueOf((String) updates.get("status")));
        }
        if (updates.containsKey("rating")) {
            book.setRating((int) updates.get("rating"));
        }
        if (updates.containsKey("coverColor")) {
            book.setCoverColor(String.valueOf(updates.get("coverColor")));
        }

        return bookRepository.save(book);
    }

    @GetMapping("/stats/monthly")
    public List<Map<String, Object>> getMonthlyStats() {
        List<Object[]> booksByMonth = bookRepository.countFinishedBooksByMonth(LocalDate.now().minusMonths(12));

        return booksByMonth.stream()
                .map(obj -> Map.of(
                        "month", obj[0],
                        "count", obj[1]
                ))
                .collect(Collectors.toList());
    }


}
