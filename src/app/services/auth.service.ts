import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<'admin' | 'user'> {

    return this.http.post<{ role: 'admin' | 'user' }>(`${this.apiUrl}/login`, { email, senha }).pipe(

      tap(response => {
        localStorage.setItem('userRole', response.role);
      }),

      map(response => response.role)
    );
  }

  cadastro(formData: any): Observable<any> {
    const { nome, email, senha } = formData;
    return this.http.post(`${this.apiUrl}/cadastro`, { nome, email, senha });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('userRole') !== null;
  }

  getRole(): string | null {
    return localStorage.getItem('userRole');
  }

  logout(): void {
    localStorage.removeItem('userRole');
  }
}
