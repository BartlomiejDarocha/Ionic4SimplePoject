import { Component, OnInit } from '@angular/core';
import { SecondPageServiceService } from '../second-page-service.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TestPagePage implements OnInit {

  constructor(
    private testService: SecondPageServiceService
  ) { }

  ngOnInit() {
  }
  test() {
    let test = '';
    this. testService.getTest().subscribe(data => {
      test = data;
    });
    console.log(test, 'TEST TEST ');
  }

}
