import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isRightPanelActive: boolean = false;

  constructor() { }

  // Método para ativar o painel de cadastro
  showSignUpPanel(): void {
    this.isRightPanelActive = true;
  }

  // Método para ativar o painel de login
  showSignInPanel(): void {
    this.isRightPanelActive = false;
  }

  ngOnInit(): void {
    document.body.classList.add('body-login');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('body-login');
  }

  onSubmitLogin(formData: any): void {
    console.log('Dados do Login:', formData);
  }

  onSubmitCadastro(formData: any): void {
    console.log('Dados do Cadastro:', formData);
  }
  
}
