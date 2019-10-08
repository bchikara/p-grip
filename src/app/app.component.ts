import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'p-grip';
  show=false;

  constructor(private spinnerService: Ng4LoadingSpinnerService){}
  
  ngOnInit(){
  }

  onActivate(event) {

    this.spinnerService.show();
    setTimeout(()=>this.spinnerService.hide(),3000)

    window.scroll(0,0); 
 }

}
