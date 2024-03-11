import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,AboutComponent,ProductListComponent,LoginComponent,RegisterComponent],
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

