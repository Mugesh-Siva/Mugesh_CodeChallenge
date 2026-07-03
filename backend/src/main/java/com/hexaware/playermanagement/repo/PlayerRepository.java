package com.hexaware.playermanagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hexaware.playermanagement.entity.Player;

public interface PlayerRepository extends JpaRepository<Player,Integer>{
	
	


}
