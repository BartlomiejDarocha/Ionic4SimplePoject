import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  param1: any;
  param2: any;
  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
    this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
  }

}
