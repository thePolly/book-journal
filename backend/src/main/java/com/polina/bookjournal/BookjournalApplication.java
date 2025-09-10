package com.polina.bookjournal;


import com.polina.bookjournal.model.Book;
import com.polina.bookjournal.model.BookStatus;
import com.polina.bookjournal.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;


@SpringBootApplication
public class BookjournalApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookjournalApplication.class, args);
	}



	@Bean
	public CommandLineRunner addSampleBook(BookRepository bookRepository) {
		return args -> {
			Book book = new Book(
						null,
					"bane",
					"author",
					5,
					BookStatus.TO_READ,
					LocalDate.now(),
					null,
					"red"
                    );
			bookRepository.save(book);
		};
	}
}
