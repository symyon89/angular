import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title :string = "My app";
  fistPage : string = "Prima pagina";
  secondPage : string = "A doua pagina";
  thirdPage : string = "A treia Pagina";
  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

}
