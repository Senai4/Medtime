import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.scss']
})
export class CuriosidadesComponent {

   constructor(private router: Router) {}

    irParaLogin(): void {
      this.router.navigate(['/login']);
    }

    Voltar(): void {
      this.router.navigate(['/home']);
    }

    irParaSobreNos(): void {
    this.router.navigate(['/sobre']);
  }

}
