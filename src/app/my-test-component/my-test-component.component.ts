import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

class Pair {
  first?: number;
  second?: number;

  constructor(first: number, second: number) {
    this.first = first;
    this.second = second;
  }
}


@Component({
  selector: 'app-my-test-component',
  templateUrl: './my-test-component.component.html',
  styleUrls: ['./my-test-component.component.scss']
})
export class MyTestComponentComponent implements OnInit {

  data: Pair[] = [];
  counter: number = 0;
  @ViewChild('first') first:ElementRef | undefined;
  @ViewChild('second') second:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addNumbers() {
    const first = +this.first?.nativeElement.value;
    const second = +this.second?.nativeElement.value;
    this.data.push(new Pair(first, second));
  }
}
