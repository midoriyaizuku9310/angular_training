import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  @Input() product: any;

  @Output()
  goBack = new EventEmitter<void>();

  onClick = () => {
    this.goBack.emit();
  };

constructor() { 
  console.log("constructor called")
}

ngOnChanges()
{
console.log("ngOnChanges called")
}

ngOnInit():void{
  console.log("ngOnInit called")
}

ngOnDestroy(){
console.log("ngOnDestroy called")
}

}