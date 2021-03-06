package com.projeto.g2.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.g2.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	
	Optional<Usuario> findByEmail(String email);
	
	Usuario findByNome(String email);
	
}
