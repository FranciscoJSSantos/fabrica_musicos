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
  },
  {
    path: 'planos',
    loadChildren: () =>
      import('../app/components/plans/plans.module').then((m) => m.PlansModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('../app/components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'instrumentos',
    loadChildren: () =>
      import('../app/components/instruments/instruments.module').then(
        (m) => m.InstrumentsModule
      ),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('../app/components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
