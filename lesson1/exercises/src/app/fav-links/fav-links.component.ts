import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = "Links for boredom:"
  favLinks = ['https://www.netflix.com', 'https://www.disneyplus.com/welcome/sign-up-now'];
  constructor() { }

  ngOnInit() {
  }

}
