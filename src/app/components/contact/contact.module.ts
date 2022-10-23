import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactComponent],
  exports: [ContactComponent, ContactRoutingModule],
})
export class ContactModule {}
