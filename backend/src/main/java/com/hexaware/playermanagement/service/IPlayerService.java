package com.hexaware.playermanagement.service;

import java.util.List;

import com.hexaware.playermanagement.dto.PlayerDTO;
import com.hexaware.playermanagement.entity.Player;

public interface IPlayerService {
	Player addPlayer(PlayerDTO dto);
	Player updatePlayer(PlayerDTO dto);
	List<Player>getAllPlayers();
	Player getPlayerById(int id);
	void deletePlayer(int id);
	
}
