import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('../app/components/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'planos',
    loadChildren: () =>
      import('../app/components/plans/plans.module').then((m) => m.PlansModule),
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('../app/components/about/about.module').then((m) => m.AboutModule),
    pathMatch: 'full',
  },
  {
    path: 'instrumentos',
    loadChildren: () =>
      import('../app/components/instruments/instruments.module').then(
        (m) => m.InstrumentsModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('../app/components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
