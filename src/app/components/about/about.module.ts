import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponentRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent, AboutComponentRoutingModule],
})
export class AboutModule {}
