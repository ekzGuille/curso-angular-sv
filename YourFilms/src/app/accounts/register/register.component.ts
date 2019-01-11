import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  register(): void {
    console.log(`Register de Usuario ${this.username} Password ${this.password}`);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
