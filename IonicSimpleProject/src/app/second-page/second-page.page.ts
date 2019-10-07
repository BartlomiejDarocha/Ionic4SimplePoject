import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { SecondPageServiceService } from './second-page-service.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  // param1: any;
  // param2: any;
  //names: Array<string>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private testService: TestService,
    private router: Router,
    private secPageService: SecondPageServiceService
    ) { }

  ngOnInit() {
  //   this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
  //   this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
  //   this.testService.getNameTable().subscribe(data => {
  //     this.names = data;
  //   });
  //   console.log(this.names, ' names');
  }
  setTest() {
    this.secPageService.setTest(' to jest wielki test modulowosci ionic 4 dla noobow he he he');
  }
  toTestStrony() {
    console.log('to nie bdzie dzialac');
    this.router.navigate(['second-page/test-page']);
  }

}
