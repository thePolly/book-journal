package com.polina.bookjournal.repository;

import com.polina.bookjournal.model.Book;
import com.polina.bookjournal.model.BookStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {
    List<Book> findByStatus(BookStatus status);

    List<Book> findByAuthor(String author);

    List<Book> findByFinishDateBetween(LocalDate from, LocalDate to);

    @Query("SELECT FUNCTION('DATE_FORMAT', b.finishDate, '%Y-%m') AS month, COUNT(b) " +
            "FROM Book b " +
            "WHERE b.finishDate >= :fromDate " +
            "AND b.status = 'FINISHED' " +
            "GROUP BY FUNCTION('DATE_FORMAT', b.finishDate, '%Y-%m') " +
            "ORDER BY month")
    List<Object[]> countFinishedBooksByMonth(@Param("fromDate") LocalDate fromDate);

}