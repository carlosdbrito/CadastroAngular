import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroEdicaoUsuariosComponent } from './pages/usuarios/cadastro-edicao/cadastro-edicao.component';
import { CadastroEdicaoProdutosComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { ProdutoGuard } from './guards/produto.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: ListagemUsuariosComponent },
  {
    path: 'usuarios/cadastrar',
    component: CadastroEdicaoUsuariosComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: 'usuarios/editar/:id',
    component: CadastroEdicaoUsuariosComponent,
    canActivate: [UsuarioGuard]
  },
  { path: 'produtos', component: ListagemProdutosComponent },
  {
    path: 'produtos/cadastrar',
    component: CadastroEdicaoProdutosComponent,
    canActivate: [ProdutoGuard]
  },
  {
    path: 'produtos/editar/:id',
    component: CadastroEdicaoProdutosComponent,
    canActivate: [ProdutoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
