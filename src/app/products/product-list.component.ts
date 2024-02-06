import { CurrencyPipe, LowerCasePipe, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'pm-products',
    standalone: true,
    imports: [NgIf, NgFor, FormsModule, LowerCasePipe, CurrencyPipe],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = 'cart';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "startRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "startRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

}