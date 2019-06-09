import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  param1: any;
  param2: any;
  names: Array<string>;

  form2: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private testService: TestService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');
    this.param2 = this.activatedRoute.snapshot.paramMap.get('param2');
    this.testService.getNameTable().subscribe(data => {
      this.names = data;
    });
    console.log(this.names, ' names');
    this.form2 = this.formBuilder.group({
      nickname: new FormControl('', Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(5),
        Validators.pattern('^[0-9]{1,3}[a-z]{5,10}$'),
        Validators.required,
      ]))
    });
  }
  onSubmit2(){
    console.log('submit!');
  }
  form2Erorrs = {
    nickname: [
      { type:'maxlength', message: 'za dlugie'},
      { type:'minlength', message: 'za krotkie'},
      { type:'pattern', message: 'zly wzór'},
      { type:'required', message: 'wymagane'},
    ]
  }

}
