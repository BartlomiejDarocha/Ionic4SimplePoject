import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  param1 = 'test';
  param2 = 'test2';
  constructor(private router: Router) { }

  toSecondPage() {
    this.router.navigate(['second-page']);
  }
  toSecondPageParam() {
    this.router.navigate(['second-page/' + this.param1]);
  }
  toSecondPageParam2() {
    this.router.navigate(['second-page/' + this.param1 + '/' + this.param2]);
  }
}
