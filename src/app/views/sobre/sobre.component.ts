import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent{

  constructor(private router: Router) {}

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

  Voltar(): void {
    this.router.navigate(['/home']);
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
