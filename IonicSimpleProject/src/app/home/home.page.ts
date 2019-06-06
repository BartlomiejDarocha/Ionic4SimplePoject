import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  param1 = 'test';
  param2 = 'test2';
  newNameArray = ['Bartek', 'Beta', 'Basia'];

  valiFirstGroup: FormGroup;
  constructor(private router: Router, private testService: TestService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.valiFirstGroup = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(5),
        Validators.required
      ]))
    });

  }
  toSecondPage() {
    this.router.navigate(['second-page']);
  }
  toSecondPageParam() {
    this.router.navigate(['second-page/' + this.param1]);
  }
  toSecondPageParam2() {
    this.testService.pushTableTest(this.newNameArray);
    this.router.navigate(['second-page/' + this.param1 + '/' + this.param2]);
  }
  onSubmit() {
    console.log('validacja przeszła');
  }
}
