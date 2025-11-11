import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isRightPanelActive: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

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
    const { email, senha } = formData;

    this.authService.login(email, senha).subscribe({
      // Se der certo (admin ou user)
      next: (role) => {
        if (role === 'admin') {
          this.router.navigate(['/admin']); // Navega para /admin
        } else {
          this.router.navigate(['/dashboard']); // Navega para /dashboard
        }
      },
      // Se der errado
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Email ou senha inválidos!');
      }
    });
  }

  onSubmitCadastro(formData: any): void {
    this.authService.cadastro(formData).subscribe({
      // Se der certo
      next: (response) => {
        console.log('Usuário cadastrado:', response);
        alert('Cadastro realizado com sucesso! Faça o login.');
        this.showSignInPanel(); // Volta para o painel de login
      },
      // Se der errado (ex: email duplicado)
      error: (err) => {
        console.error('Erro no cadastro:', err.error.error);
        alert(err.error.error || 'Erro ao cadastrar.'); // Mostra o erro da API
      }
    });
  }
}
