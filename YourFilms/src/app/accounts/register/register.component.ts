import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {}

  register(): void {
    if (!this.accountService.register(this.username, this.password)) {
      alert("Error al registrarse");
    } else {
      this.router.navigate(["Index"]);
    }
  }
}
