import { Component, ElementRef, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  menuAtivo = false;
  userMenuAtivo = false;
  isLoggedIn = false;
  userName = '';
  isAdmin = false;

  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('userMenu') userMenuElement!: ElementRef;
  @ViewChild('userIcon') userIconElement!: ElementRef;

  // Estado do Carrossel
  currentIndex = 0;
  private slideInterval: any;

  // Lista de imagens
  images = [
    'assets/img/carrossel2/1.svg',
    'assets/img/carrossel2/2.svg',
    'assets/img/carrossel2/3.svg',
    'assets/img/carrossel2/4.svg',
    'assets/img/carrossel2/5.svg',
  ];

  constructor(public authService: AuthService, private router: Router) {}


ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {

      this.isLoggedIn = !!user;
      this.userName = (user?.nome || user?.name) || '';

      if (this.isLoggedIn && user) {
        this.isAdmin = user.perfil === 'admin';
      } else {
        this.isAdmin = false;
        this.userName = '';
      }

      console.log('Status do Usuário (Dashboard):', {
          isLogged: this.isLoggedIn,
          isAdministrator: this.isAdmin,
          Name: this.userName
      });
    });

    // Inicializa o carrossel
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
    if (this.menuAtivo) {
        this.userMenuAtivo = false;
    }
  }

  toggleUserMenu() {
    this.userMenuAtivo = !this.userMenuAtivo;
    if (this.userMenuAtivo) {
      this.menuAtivo = false;
    }
  }

  fecharQualquerMenu() {
    this.menuAtivo = false;
    this.userMenuAtivo = false;
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      this.menuAtivo &&
      this.menuElement &&
      this.menuIcon &&
      !this.menuElement.nativeElement.contains(target) &&
      !this.menuIcon.nativeElement.contains(target)
    ) {
      this.menuAtivo = false;
    }

    if (this.userMenuAtivo) {
        if (
            this.userMenuElement &&
            this.userIconElement &&
            !this.userMenuElement.nativeElement.contains(target) &&
            !this.userIconElement.nativeElement.contains(target)
        ) {
            this.userMenuAtivo = false;
        }
    }
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 3000);
  }

  pauseSlide(): void {
    clearInterval(this.slideInterval);
  }

  moveSlide(direction: number): void {
    const newIndex = this.currentIndex + direction;

    if (newIndex < 0) {
      this.currentIndex = this.images.length - 1;
    } else if (newIndex >= this.images.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = newIndex;
    }
  }

  efetuarLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.userMenuAtivo = false; 
  }
}
