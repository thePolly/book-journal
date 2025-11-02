package com.polina.bookjournal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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

    @NotBlank
    private String title;

    @NotBlank
    private String author;

    @Min(0)
    @Max(10)
    private int rating;

    @Enumerated(EnumType.STRING)
    private BookStatus status;

    private LocalDate startDate;

    private LocalDate finishDate;

    private String coverColor;
}