import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlansComponent],
  exports: [PlansComponent, PlansRoutingModule],
})
export class PlansModule {}
