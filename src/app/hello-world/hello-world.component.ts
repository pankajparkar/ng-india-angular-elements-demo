import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {
  @Input() greetings: string;
  constructor() { }

  ngOnInit() {
  }

}
