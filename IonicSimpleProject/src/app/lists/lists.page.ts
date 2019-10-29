import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  @ViewChild('content') private content: any;
  @ViewChild('section') private section: ElementRef;
  public activeCard = 0;
  public position = 0;
  constructor(
  ) { }

  ngOnInit() {
    //console.log(this.content, 'content');
    this.position = document.getElementById('test0').offsetTop;
  }
  public activeCardHandler(i: number) {
    let test2;
    this.activeCard = i;
    test2 = document.getElementById(`test${this.activeCard}`).offsetTop;
    this.position = test2;
    console.log(test2, 'test2');
  }
  public srcollToBottom() {
    console.log('scorll executed');
    this.content.scrollToBottom(300);
  }
  public checkRefernce() {
    console.log(this.section, 'section');
    console.log(this.section.nativeElement.classList, 'native elment');
  }
  public ElRefenceTest() {
  }
}
