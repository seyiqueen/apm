import { Component } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";

//Component Decorator
@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
  </div>
  `
})

//Class
export class AppComponent{
  pageTitle: string = 'Acme Product Management'; 
}
