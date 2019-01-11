import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  login(): void {
    console.log(`Login de Usuario ${this.username} Password ${this.password}`);
  }

  constructor() { }

  ngOnInit() {
  }


}
