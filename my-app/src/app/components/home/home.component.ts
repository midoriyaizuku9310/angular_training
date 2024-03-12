import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

    constructor(){
      setTimeout(()=>{
        this.isAllowed=false;
      },5000)
    }


firstName='mido';
isAllowed = true;
emp={
  eid:101, 
  fname:'danish',
  salary:25000
}


personName =''

viewName =()=>{
  this.personName="Danish"
}
hideName =()=>{
  this.personName=""
}

secondName=''
}
