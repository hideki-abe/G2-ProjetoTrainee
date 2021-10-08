package com.projeto.g2.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.g2.controller.dto.TokenDto;
import com.projeto.g2.controller.form.LoginForm;
import com.projeto.g2.modelo.Usuario;
import com.projeto.g2.repository.UsuarioRepository;



@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class AutenticacaoController {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private TokenService tokenService;
	
	private UsuarioRepository usuarioRepository;
	
	@PostMapping
	public ResponseEntity<TokenDto> autenticar(@RequestBody @Valid LoginForm form){
		UsernamePasswordAuthenticationToken dadosLogin = form.converter();
		
		try {
			Authentication authentication = authManager.authenticate(dadosLogin);
			String token = tokenService.gerarToken(authentication);
			String email = (String) dadosLogin.getPrincipal();

			
			
			
			
			
			return ResponseEntity.ok(new TokenDto(token, "Bearer", email, "teste"));
		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().build();
		}
		
	}
	
	
	
}
