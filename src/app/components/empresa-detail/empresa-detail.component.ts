import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasServiceService } from '../../services/empresas-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatGridListModule, MatSelectModule],
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})

export class EmpresaDetailComponent implements OnInit {
  empresa: any = {
    nombre_comercial: '',
    razon_social: '',
    telefono: '',
    correo_electronico: '',
    nit: '',
    estado: true,
    direccion: ''
  };
  errores: string[] = [];
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private empresasService: EmpresasServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      const id = idString ? +idString : null;

      if (id !== null) {
        this.isEditMode = true;
        this.empresasService.getEmpresa(id).subscribe(data => {
          this.empresa = data;
        });
      } else {
        this.isEditMode = false;
      }
    });
  }

guardarCambios() {
  this.errores = [];

  // Validaciones
  if (!this.empresa.nombre_comercial) {
    this.errores.push('El nombre comercial es requerido.');
  }
  if (!this.empresa.razon_social) {
    this.errores.push('La razón social es requerida.');
  }
  if (!this.empresa.telefono || !/^[0-9]{7,15}$/.test(this.empresa.telefono)) {
    this.errores.push('El teléfono debe contener entre 7 y 15 dígitos.');
  }
  // Excluir validación del correo electrónico
  // if (!this.empresa.correo_electronico || !/\S+@\S+\.\S+/.test(this.empresa.correo_electronico)) {
  //   this.errores.push('Introduzca un correo electrónico válido.');
  // }
  if (!this.empresa.nit) {
    this.errores.push('El NIT es requerido.');
  }
  if (this.empresa.estado === undefined) {
    this.errores.push('El estado es requerido.');
  }
  if (!this.empresa.direccion) {
    this.errores.push('La dirección es requerida.');
  }

  if (this.errores.length > 0) {
    return;
  }

  // Crear un objeto nuevo sin el correo electrónico para la actualización
  const { correo_electronico, ...empresaData } = this.empresa;

  if (this.isEditMode) {
    this.empresasService.updateEmpresa(empresaData).subscribe(
      response => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Los datos de la empresa se han actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      },
      error => {
        this.errores = error.error.message || ['Error desconocido'];
      }
    );
  } else {
    this.empresasService.createEmpresa(empresaData).subscribe(
      response => {
        Swal.fire({
          title: 'Éxito!',
          text: 'La empresa ha sido creada correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/empresas']);
        });
      },
      error => {
        this.errores = error.error.message || ['Error desconocido'];
      }
    );
  }
}


  cancelar() {
    this.router.navigate(['/empresas']);
  }
}
