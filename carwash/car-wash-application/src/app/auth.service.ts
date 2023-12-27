// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // For simplicity, hardcoding a user with username 'admin' and password 'password'
  private validUser = { username: 'admin', password: 'password' };

  authenticate(username: string, password: string): boolean {
    // Check if provided credentials match the hardcoded user
    return username === this.validUser.username && password === this.validUser.password;
  }
}
