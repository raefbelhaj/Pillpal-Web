package com.commerce.commerce.Service;

import com.commerce.commerce.Models.User;
import com.commerce.commerce.dtos.LoginUserDto;
import com.commerce.commerce.dtos.RegisterUserDto;
import com.commerce.commerce.repositories.UserRepository;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(RegisterUserDto input) {
        User user = new User()
                .setFullName(input.getFullName())
                .setEmail(input.getEmail())
                .setPassword(passwordEncoder.encode(input.getPassword()))
                .setRole(input.getRole());

        // Définir 'enabled' sur false si le rôle est DOCTOR
        if (user.getRole() == User.Role.DOCTOR) {
            user.setEnabled(false);
        } else {
            user.setEnabled(true); // Assurez-vous que les autres rôles sont activés par défaut
        }

        return userRepository.save(user);
    }

    public User authenticate(LoginUserDto input) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Vérifiez si l'utilisateur est activé
        if (!user.isEnabled()) {
            throw new IllegalStateException("User account is not activated yet.");
        }

        // Retourner l'utilisateur authentifié
        return user;
    }


}