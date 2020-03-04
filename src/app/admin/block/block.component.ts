import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  message="Hello";
  constructor() { }
  @BlockUI() blockUI: NgBlockUI;
  ngOnInit() {
  }

  submit(){
    if(this.message==='rahul@123'){
      this.blockUI.stop();
    }
    
  }

}
