com.polina.bookjournal.model;

import jakarta.persistence.*;
import java.util.UUID;


@Entity
public class Book {

    @Id
    @GeneratedValue
    private UUID id;

    private String title;

    private String author;

    private int rating;

    @Enumerated(EnumType.STRING)
    private BookStatus status;

    private String coverColor;

    public Book() {}

    public Book(String title, String author, int rating, BookStatus status, String coverColor) {
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.status = status;
        this.coverColor = coverColor;
    }

}