import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-artisan',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, RouterLink],
  templateUrl: './liste-artisan.component.html',
  styleUrl: './liste-artisan.component.scss'
})
export class ListeArtisanComponent {
  @Input() data:any
}
