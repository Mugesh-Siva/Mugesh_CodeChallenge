package com.hexaware.playermanagement.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class PlayerDTO {

    private int playerId;
    @Schema(example = "Virat Kohli")
    @NotBlank(message = "Player name is required")
    @Pattern(
    	    regexp = "^([A-Z][a-zA-Z]*)(\\s[A-Z][a-zA-Z]*)*$",
    	    message = "Each word in the player name must start with a capital letter")
    private String playerName;

    @NotNull(message = "Jersey number is required")
    @Min(value = 1, message = "Jersey number must be between 1 and 99")
    @Max(value = 99, message = "Jersey number must be between 1 and 99")
    private Integer jerseyNumber;

    @NotBlank(message = "Role is required")
    @Pattern(
        regexp = "^(Batsman|Bowler|Keeper|All Rounder)$",
        message = "Role must be Batsman, Bowler, Keeper, or All Rounder"
    )
    private String role;

    @NotNull(message = "Total Matches is required")
    @Min(value = 0, message = "Total Matches cannot be negative")
    private Integer totalMatches;

    @NotBlank(message = "Team Name should not be blank")
    private String teamName;

    @NotBlank(message = "Country/State Name should not be blank")
    private String country;

    private String description;
}