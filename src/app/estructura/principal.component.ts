import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavComponent, MenuComponent, FooterComponent, AppComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
