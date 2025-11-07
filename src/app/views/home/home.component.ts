import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menuativo = false;
  isLoggedIn = false;
  userName = '';
  isAdmin = false;

  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  constructor(
    public authService: AuthService) {}

  ngOnInit(): void {
    // Observa mudanças de login
    this.authService.currentUser$.subscribe((user: { nome: string; perfil: string; }) => {
      this.isLoggedIn = !!user;
      if (this.isLoggedIn) {
        this.userName = user.nome;
        this.isAdmin = user.perfil === 'admin';
      } else {
        this.userName = '';
        this.isAdmin = false;
      }
    });
  }

  toggleMenu() {
    this.menuativo = !this.menuativo;
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.menuElement &&
      this.menuIcon &&
      !this.menuElement.nativeElement.contains(target) &&
      !this.menuIcon.nativeElement.contains(target)
    ) {
      this.menuativo = false;
    }
  }
}

