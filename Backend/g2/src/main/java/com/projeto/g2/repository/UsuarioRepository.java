package com.projeto.g2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.g2.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
