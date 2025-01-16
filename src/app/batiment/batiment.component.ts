import { Component, OnInit, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtisanserviceService } from '../artisanservice.service';
import { ActivatedRoute } from "@angular/router";
import { CommonModule} from "@angular/common";
import { ListeArtisanComponent } from '../liste-artisan/liste-artisan.component';
import { SearchPipe } from '../pipes/search.pipe';
import { Router } from '@angular/router';
import { FilterByCategoryPipe } from '../pipes/filter-by-category.pipe';
import { Data } from '@angular/router';

import { HeaderComponent } from "../header/header.component";
import { DataService } from '../data.service';



@Component({
  selector: 'app-batiment',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByCategoryPipe, HeaderComponent, ListeArtisanComponent],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class BatimentComponent {
  categorie: string = ""
  sort:any
  searchTerm:string = ""
  recherche:any = ""
  
  constructor (
    private router: Router,
    private DataService : DataService,
    private route: ActivatedRoute,
  ) {}
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorie = params["categorie"];
    })

    this.route.queryParams
    .subscribe((params) => {
    this.recherche = params;
    this.recherche = this.recherche.search
    })

    this.sort = this.DataService.ListArtisans
  }

}
