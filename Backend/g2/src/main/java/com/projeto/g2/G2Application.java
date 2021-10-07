package com.projeto.g2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.web.config.EnableSpringDataWebSupport;


@SpringBootApplication
@EnableSpringDataWebSupport
public class G2Application {

	public static void main(String[] args) {
		SpringApplication.run(G2Application.class, args);
	}

}
