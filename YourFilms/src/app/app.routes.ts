import { Routes } from "@angular/router";
import { IndexComponent } from "./films/index/index.component";
import { ViewComponent } from "./films/view/view.component";
import { LoginComponent } from "./accounts/login/login.component";
import { RegisterComponent } from "./accounts/register/register.component";

export const routes: Routes = [
  { path: "", redirectTo: "/Index", pathMatch: "full" },
  { path: "Index", component: IndexComponent },
  { path: "Login", component: LoginComponent },
  { path: "Register", component: RegisterComponent },
  { path: "View/:id", component: ViewComponent }
];
