import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Rota para a página inicial
  { path: 'curriculos', component: CurriculosComponent }, // Rota para curriculos
  { path: 'vagas', component: VagasComponent } // Rota para vagas
  ];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }