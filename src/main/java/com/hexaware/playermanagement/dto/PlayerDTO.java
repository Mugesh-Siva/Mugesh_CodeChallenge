package com.hexaware.playermanagement.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
public class PlayerDTO {
	private int playerId;
	@NotBlank(message="Player name is required")
	private String playerName;
	@NotNull(message="jerser number required")
	@Min(value=1,message="jersey number cannot be negative")
	private int jerseyNumber;
	@NotBlank(message="Role is required")
	private String role;
	@NotNull(message="Total Matches is required")
	@Min(value=0,message="Total Matches cannot be negative")
	private int totalMatches;
	@NotBlank(message="Team Name should not be blank")
	private String teamName;
	@NotBlank(message="Country Name should not be blank")
	private String countryOrStateName;
	private String description;
	

}
