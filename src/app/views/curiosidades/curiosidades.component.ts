import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.scss']
})
export class CuriosidadesComponent {

   constructor(
    private router: Router,
    private authService: AuthService
   ) {}

    irParaLogin(): void {
      this.router.navigate(['/login']);
    }

    Voltar(): void {
      this.router.navigate(['/home']);
    }

    irParaSobreNos(): void {
    this.router.navigate(['/sobre']);
  }

  voltar() {
  if (this.authService.isLoggedIn()) {
    this.router.navigate(['/dashboard']);
  } else {
    this.router.navigate(['/home']); 
  }
}
}
