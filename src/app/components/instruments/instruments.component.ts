import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/shared/intrument';
import { INTRUMENTS } from '../../../shared/intruments';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],
})
export class InstrumentsComponent implements OnInit {
  instruments: Instrument[] = [];

  constructor() {}

  ngOnInit() {
    this.instruments = INTRUMENTS;
  }
}
