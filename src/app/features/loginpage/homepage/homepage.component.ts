import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input() data:any;
  @Input() pass:any;
  @Input() submit:any;
  @Input() address:any;

  constructor() { }

  ngOnInit(): void {
  }

}
