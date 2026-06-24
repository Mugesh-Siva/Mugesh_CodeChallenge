package com.hexaware.playermanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.playermanagement.dto.PlayerDTO;
import com.hexaware.playermanagement.entity.Player;
import com.hexaware.playermanagement.service.IPlayerService;

@RestController
@RequestMapping("/api/players")
public class PlayerController {
	@Autowired
	private IPlayerService service;
	
	@PostMapping("/add")
	public Player addPlayer(@RequestBody PlayerDTO dto) {
		return service.addPlayer(dto);
	}
	@PutMapping("/update")
	public Player updatePlayer(@RequestBody PlayerDTO dto) {
		return service.updatePlayer(dto);
	}
	@GetMapping("/all")
	public List<Player> getAllPlayers(){
		return service.getAllPlayers();
	}
	@GetMapping("/getby/{id}")
	public Player getPlayerById(@PathVariable int id) {
		return service.getPlayerById(id);
	}
	@DeleteMapping("/delete/{id}")
	public String deletePlayer(@PathVariable int id) {
		service.deletePlayer(id);
		return "Player Deleted";
	}

}
