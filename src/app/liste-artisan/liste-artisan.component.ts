import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataArtisans from "../../data/datas.json"
import { RouterLink } from '@angular/router';
import { FilterByCategoryPipe } from '../pipes/filter-by-category.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-artisan',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterByCategoryPipe],
  templateUrl: './liste-artisan.component.html',
  styleUrl: './liste-artisan.component.scss'
})
export class ListeArtisanComponent implements OnInit{
  artisans: any = (dataArtisans as any).default;
  selectedCategory = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'];
    });
  }
  }
