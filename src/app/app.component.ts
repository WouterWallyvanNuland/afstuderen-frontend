import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 'Loading...';

  ngOnInit() {
    console.log("Start fetchint data from backend");
    // TODO
  }

  onRocketClick() {
    console.log("Launch!");
    // TODO post naar backend en display resultaat
  }
}
