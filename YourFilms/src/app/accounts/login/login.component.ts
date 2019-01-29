import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {}

  login(): void {
    if (!this.accountService.login(this.username, this.password)) {
      alert("Error al hacer el login");
    } else {
      this.router.navigate(["Index"]);
    }
  }
}
