import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'p-grip';

  ngOnInit(){
  }

  onActivate(event) {
    $(".preloaderimg").fadeOut(450);
    $(".preloader").fadeOut(750).delay(200, function(){
      $(this).remove();
    });   
    window.scroll(0,0); 
 }

}
