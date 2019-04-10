import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import {HelloComponent } from './hello.component';

export class Animal {
  constructor(public name: string){}
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = 'false';
  /* @ViewChild(HelloComponent)
  myHello; */
  
  @ViewChildren(HelloComponent)
  myHellos: QueryList<HelloComponent>;

  ngOnInit() {
    let animals: Animal[] = [new Animal('lion'),new Animal('tiger')];
    
  }

  ngAfterViewInit() {
    console.log(this.myHellos);
  }
}
