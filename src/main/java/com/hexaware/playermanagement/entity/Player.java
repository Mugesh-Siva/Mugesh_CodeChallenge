package com.hexaware.playermanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Player {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int playerId;
	private String playerName;
	private int jerseyNumber;
	private String role;
	private int totalMatches;
	private String teamName;
	private String countryOrStateName;
	private String description;
	
	

}
