import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosidadesComponent } from './views/curiosidades/curiosidades.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'curiosidades', component: CuriosidadesComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'administrador', component: AdministradorComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' }},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
