import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
name:any;
password:any;
add:any;
// ok:any;
  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  onHomepageButtonClicked():void{
    this.route.navigateByUrl('welcomepage');
  }

}
