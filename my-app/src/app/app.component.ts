import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// @Component({
//   selector:'app-root',
//   //templateUrl:'./app.component.html',//points to external html file
//   standalone:true,
//   imports: [RouterOutlet],
//   template:'<p>this is from template</p>'

// })
export class AppComponent { //string interpolation
  title = 'my-app';
  firstName='mido';
  salary=25000

  emp ={eid:101, fname:'danish'}
}

