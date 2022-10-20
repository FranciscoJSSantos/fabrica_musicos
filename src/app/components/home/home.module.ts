import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, HomeRoutingModule],
})
export class HomeModule {}
