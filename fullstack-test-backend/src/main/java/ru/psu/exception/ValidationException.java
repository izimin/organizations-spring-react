package ru.psu.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@NoArgsConstructor
public class ValidationException extends RuntimeException {

    private final Set errors = new LinkedHashSet<>();

    public void put(String message) {
        errors.add(message);
    }

    public void putAll(List putErrors) {
        errors.addAll(putErrors);
    }

    public void putAll(ValidationException validateException) {
        errors.addAll(validateException.getErrors());
    }

    public void isErrors() throws ValidationException {
        if (!errors.isEmpty()) {
            throw this;
        }
    }
    
    public ValidationException(String message) {
        super();
        errors.add(message);
    }
}
