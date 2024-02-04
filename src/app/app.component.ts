import { Component } from "@angular/core";

//Component Decorator
@Component({
  selector: 'pm-root',
  standalone: true,
  template: `
  <div><h1>{{pageTitle}}</h1>
      <div>My First Component </div>
  </div>
  `
})

//Class
export class AppComponent{
  pageTitle: string = 'Acme Product Management'; 
}
