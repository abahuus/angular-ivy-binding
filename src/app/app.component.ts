import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public message : string = "Hello World";
  public totalPresentase2 : number = 99.99823456;
  public totalPresentase3 : number = 99.199999999;
  public totalPresentase4 : number = 95.1;
  public totalPresentase5 : number = 99.999;

}
