import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { CuriosidadesComponent } from './views/curiosidades/curiosidades.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import { ConfiguracaoComponent } from './views/configuracao/configuracao.component';
import { PoliticaPrivacidadeComponent } from './views/politica-privacidade/politica-privacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreComponent,
    CuriosidadesComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    AdministradorComponent,
    ConfiguracaoComponent,
    PoliticaPrivacidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
