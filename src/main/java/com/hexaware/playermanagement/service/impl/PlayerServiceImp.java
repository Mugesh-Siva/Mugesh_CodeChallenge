package com.hexaware.playermanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.playermanagement.dto.PlayerDTO;
import com.hexaware.playermanagement.entity.Player;
import com.hexaware.playermanagement.exception.PlayerNotFoundException;
import com.hexaware.playermanagement.repo.PlayerRepository;
import com.hexaware.playermanagement.service.IPlayerService;
@Service
public class PlayerServiceImp implements IPlayerService{
	
	@Autowired
	private PlayerRepository repo;

	@Override
	public Player addPlayer(PlayerDTO dto) {
		Player player=new Player();
		player.setPlayerName(dto.getPlayerName());
		player.setJerseyNumber(dto.getJerseyNumber());
		player.setRole(dto.getRole());
		player.setTotalMatches(dto.getTotalMatches());
		player.setTeamName(dto.getTeamName());
		player.setCountryOrStateName(dto.getCountryOrStateName());
		player.setDescription(dto.getDescription());
		return repo.save(player);
		
	}

	@Override
	public Player updatePlayer(PlayerDTO dto) {

	    Player player = repo.findById(dto.getPlayerId()).orElseThrow(() -> new PlayerNotFoundException("Player not found"));

	    player.setPlayerName(dto.getPlayerName());
	    player.setJerseyNumber(dto.getJerseyNumber());
	    player.setRole(dto.getRole());
	    player.setTotalMatches(dto.getTotalMatches());
	    player.setTeamName(dto.getTeamName());
	    player.setCountryOrStateName(dto.getCountryOrStateName());
	    player.setDescription(dto.getDescription());

	    return repo.save(player);
	}

	@Override
	public List<Player> getAllPlayers() {
		return repo.findAll();
	}

	@Override
	public Player getPlayerById(int id) {
	    return repo.findById(id).orElseThrow(() -> new PlayerNotFoundException("Player not found"));
	}

	@Override
	public void deletePlayer(int id) {

	    Player player = repo.findById(id).orElseThrow(() -> new PlayerNotFoundException("Player not found"));

	    repo.delete(player);
	}
}
