import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 'Loading...';

  
  constructor(private counterservice: CounterService){}

  ngOnInit() {
    console.log("Start fetching data from backend");
    this.counterservice
    .getCurrentCounter()
    .subscribe((res)=>{
      console.log(res);
      this.counter = res.hoeGek;
    })
  }

  onRocketClick() {
    console.log("Launch!");
    this.counterservice
    .raiseCounter()
    .subscribe((res) => {
      console.log(res);
      this.counter = "" + res.counter;
    })
  }
}
