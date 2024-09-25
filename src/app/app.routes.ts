import { RouterModule, Routes } from '@angular/router';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { EmpresaDetailComponent } from './components/empresa-detail/empresa-detail.component';
export const routes: Routes = [
    {
        path: '',
        component: EmpresasListComponent
    },
    {
        path: 'empresas',
        component: EmpresasListComponent
    },
    {
        path: 'empresa/nueva',
        component: EmpresaDetailComponent
    },
    {
        path: 'empresa/:id',
        component: EmpresaDetailComponent
    }
];
