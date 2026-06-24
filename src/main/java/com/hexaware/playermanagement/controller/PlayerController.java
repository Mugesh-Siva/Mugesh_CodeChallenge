package com.hexaware.playermanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
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

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
@Validated
public class PlayerController {

    @Autowired
    private IPlayerService service;

    @PostMapping("/add")
    public Player addPlayer(@Valid @RequestBody PlayerDTO dto) {
        return service.addPlayer(dto);
    }

    @PutMapping("/update")
    public Player updatePlayer(@Valid @RequestBody PlayerDTO dto) {
        return service.updatePlayer(dto);
    }

    @GetMapping("/all")
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable int id) {
        return service.getPlayerById(id);
    }

    @DeleteMapping("/{id}")
    public String deletePlayer(@PathVariable int id) {
        service.deletePlayer(id);
        return "Player Deleted Successfully";
    }
}