import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosidadesComponent } from './views/curiosidades/curiosidades.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdministradorComponent } from './views/administrador/administrador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'curiosidades', component: CuriosidadesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
