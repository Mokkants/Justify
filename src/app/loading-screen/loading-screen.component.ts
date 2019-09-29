import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  loading = true;
  logo = "/assets/logo.png";

  constructor() { }

  ngOnInit() {
  } 

}
