import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  public test = "test"

  public testFun(): void {
    console.log('click')
  }

  constructor() { }

  ngOnInit(): void {
  }

}


