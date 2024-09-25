import { Component } from '@angular/core';
import { EmpresasServiceService } from '../../services/empresas-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empresas-list.component.html',
  styleUrl: './empresas-list.component.css'
})
export class EmpresasListComponent {
  empresas: any[] = [];
  constructor(private empresasService: EmpresasServiceService) {}
  ngOnInit() {
    this.empresasService.getEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }
   


}
