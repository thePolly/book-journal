package com.polina.bookjournal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

    private LocalDate startDate;

    private LocalDate finishDate;

    private String coverColor;
}