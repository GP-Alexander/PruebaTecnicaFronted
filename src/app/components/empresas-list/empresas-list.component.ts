import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasServiceService } from '../../services/empresas-service.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent {
  empresas: any[] = [];
  displayedColumns: string[] = ['id', 'estado', 'nombre_comercial', 'correo_electronico', 'nit', 'actions'];
  dataSource: any[] = [];

  constructor(private empresasService: EmpresasServiceService, private router: Router) {}

  ngOnInit() {
    this.cargarEmpresas();
  }

  cargarEmpresas() {
    this.empresasService.getEmpresas().subscribe((data) => {
      this.empresas = data;
      this.dataSource = this.empresas;
    });
  }

  verEmpresa(empresa: any) {
    this.router.navigate(['/empresa', empresa.id]);
  }

  crearEmpresa() {
    this.router.navigate(['/empresa/nueva']);
  }

  eliminarEmpresa(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás deshacer esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empresasService.deleteEmpresa(id).subscribe(
          response => {
            Swal.fire(
              'Eliminado!',
              'La empresa ha sido eliminada.',
              'success'
            );
            // Actualiza la lista después de eliminar
            this.cargarEmpresas();
          },
          error => {
            console.error('Error eliminando la empresa:', error);
            Swal.fire(
              'Error!',
              'Hubo un problema al eliminar la empresa.',
              'error'
            );
          }
        );
      }
    });
  }
}
