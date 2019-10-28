import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  @ViewChild('content') private content: any;

  public activeCard = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.content);
  }
  public activeCardHandler(i: number) {
    this.activeCard = i;
  }
  public srcollToBottom() {
    console.log('scorll executed');
    this.content.scrollToBottom(300);
  }
}
