import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // A conta de admin (lógica local)
  private adminCredentials = {
    email: 'admin@medtime.com',
    senha: 'admin123'
  };

  // URL da sua API (agora aponta para /api/users)
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  // Função de LOGIN
  login(email: string, senha: string): Observable<'admin' | 'user'> {

    // 1. Checa se é o admin (local)
    if (email === this.adminCredentials.email && senha === this.adminCredentials.senha) {
      localStorage.setItem('userRole', 'admin');
      return of('admin'); // Retorna um Observable de 'admin'
    }

    // 2. Se não for admin, chama a API para o usuário comum
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap(response => {
        // Se a API respondeu 200 OK, salvamos o 'user'
        localStorage.setItem('userRole', 'user');
      }),
      catchError(error => {
        // Se a API respondeu 401, 500, etc.
        localStorage.removeItem('userRole');
        return throwError(() => new Error('Credenciais de usuário inválidas'));
      })
    );
  }

  // Função de CADASTRO
  cadastro(formData: any): Observable<any> {
    const { nome, email, senha } = formData;
    return this.http.post(`${this.apiUrl}/cadastro`, { nome, email, senha });
  }

  // Funções auxiliares (iguais a antes)
  isLoggedIn(): boolean {
    return localStorage.getItem('userRole') !== null;
  }

  getRole(): string | null {
    return localStorage.getItem('userRole');
  }

  logout(): void {
    localStorage.removeItem('userRole');
    // (Injete o Router aqui para navegar para /login)
  }
}
