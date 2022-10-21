import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InstrumentsRoutingModule } from './instruments-routing.module';
import { InstrumentsComponent } from './instruments.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InstrumentsComponent],
  exports: [InstrumentsComponent, InstrumentsRoutingModule],
})
export class InstrumentsModule {}
