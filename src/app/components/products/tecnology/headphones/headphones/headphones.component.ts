import { Component, OnInit } from '@angular/core';
import { RetrieveProductsService } from '../../../../../services/shared/retrieve-products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-headphones',
  imports: [CurrencyPipe],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.scss'
})
export class HeadphonesComponent implements OnInit {
  products: any[] = []

  constructor(
    private retrieveProductsService: RetrieveProductsService
  ) { }

  ngOnInit(): void {
    this.retrieveProductsService.retrieveAllProducts('headphones').subscribe({
      next: (res) => {
        this.products = res;
        console.log(res)
      }, error(err) {
        console.log(err)
      }
    })
  }

  oi() {
    alert('oi')
  }

}
