package com.commerce.commerce.dtos;


import com.commerce.commerce.Models.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class RegisterUserDto {
    private String email;

    private String password;

    private String fullName;
    private User.Role role; // Utiliser l'énumération User.Role



    public String getEmail () {
        return email;
    }

    public void setEmail (String email) {
        this.email = email;
    }

    public String getPassword () {
        return password;
    }

    public void setPassword (String password) {
        this.password = password;
    }

    public String getFullName () {
        return fullName;
    }

    public void setFullName (String fullName) {
        this.fullName = fullName;
    }


    public User.Role getRole () {
        return role;
    }

    public void setRole (User.Role role) {
        this.role = role;
    }
}
