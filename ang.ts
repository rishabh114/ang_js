import { Component } from '@angular/core';

@Component({
  selector: 'app-vulnerable',
  template: `
    <div>
      <h1>User Profile</h1>
      <!-- Vulnerable to XSS -->
      <div [innerHTML]="userInput"></div>
    </div>
  `
})
export class VulnerableComponent {
  userInput: string = '<script>alert("XSS Attack!")</script>';

  constructor() {
    // Simulate getting user input from an external source
    this.userInput = '<script>alert("XSS Attack!")</script>';
  }
}
