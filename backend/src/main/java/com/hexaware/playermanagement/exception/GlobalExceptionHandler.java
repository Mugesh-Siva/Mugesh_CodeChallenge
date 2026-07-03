package com.hexaware.playermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PlayerNotFoundException.class)
    @ResponseStatus(reason = "Player not found in the system", code = HttpStatus.NOT_FOUND)
    public void handlePlayerNotFoundException() {
    }

    

    @ExceptionHandler(Exception.class)
    @ResponseStatus(reason = "Bad Request", code = HttpStatus.BAD_REQUEST)
    public void handleGenericException() {
    }
}
