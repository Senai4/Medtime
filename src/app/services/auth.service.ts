import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Usuario, LoginResponse, CadastroResponse} from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // URL da sua API Express.
  private apiUrl = 'http://localhost:3000/users';
  currentUser$: any;

  constructor(private http: HttpClient) {}

  /**
   * Envia os dados de cadastro para a API
   */
  cadastrar(dadosUsuario: any): Observable<CadastroResponse> {
    return this.http.post<CadastroResponse>(
      `${this.apiUrl}/cadastro`,
      dadosUsuario
    );
  }

  /**
   * Envia os dados de login para a API
   */
  login(dadosLogin: any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, dadosLogin)
      .pipe(
        // 'tap' permite executar uma ação com a resposta sem modificá-la
        tap((resposta) => {
          // Se a resposta tiver um token, salva no navegador
          if (resposta.token) {
            this.salvarToken(resposta.token);
          }
        })
      );
  }

  // --- Funções para gerenciar o Token JWT no Navegador ---

  /**
   * Salva o token JWT no localStorage do navegador
   */
  salvarToken(token: string): void {
    localStorage.setItem('medtime-token', token);
  }

  /**
   * Pega o token salvo no localStorage
   */
  obterToken(): string | null {
    return localStorage.getItem('medtime-token');
  }

  /**
   * Remove o token para fazer logout
   */
  logout(): void {
    localStorage.removeItem('medtime-token');
    // Você pode adicionar um redirecionamento para a página de login aqui
  }

  /**
   * Verifica se o usuário está logado (se existe um token)
   */
  estaLogado(): boolean {
    return this.obterToken() !== null;
  }

  // Você pode adicionar uma função para pegar os dados do usuário do token
  // getUsuarioLogado(): any | null {
  //   const token = this.obterToken();
  //   if (!token) return null;
  //
  //   try {
  //     // Decodifica o token (o payload)
  //     return JSON.parse(atob(token.split('.')[1]));
  //   } catch (e) {
  //     return null;
  //   }
  // }
}
