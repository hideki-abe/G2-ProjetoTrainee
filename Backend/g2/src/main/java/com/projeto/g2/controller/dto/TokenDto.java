package com.projeto.g2.controller.dto;

import java.util.Optional;

public class TokenDto {
	
	
	private String token;
	private String tipo;
	private String email;
	private String username;
	
	
	public TokenDto(String token, String tipo, String user, String username) {
		this.token = token;
		this.tipo = tipo;
		this.email = user;
		this.username = username;
	}


	public String getToken() {
		return token;
	}


	public String getTipo() {
		return tipo;
	}
	
	
	public String getUser() {
		return email;
	}
	
	public String getUsername() {
		return username;
	}

}
