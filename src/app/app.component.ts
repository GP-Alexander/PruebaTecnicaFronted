import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpresasListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
