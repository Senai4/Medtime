import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent{

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

  voltar() {
  if (this.authService.isLoggedIn()) {
    this.router.navigate(['/dashboard']);
  } else {
    this.router.navigate(['/home']); 
  }
}

  irParaCuriosidades(): void {
    this.router.navigate(['/curiosidades']);
  }

  ngOnInit(): void {
    document.body.classList.add('body-sobre');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('body-sobre');
  }
}
