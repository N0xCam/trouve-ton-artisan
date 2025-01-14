import { Component, OnInit, LOCALE_ID  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtisanserviceService } from '../artisanservice.service';
import { ActivatedRoute } from "@angular/router";
import { CommonModule} from "@angular/common";
import { SearchPipe } from '../search.pipe';
import { Router } from '@angular/router';

export interface Top3 {
  id: number;
  image:string;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean
}



@Component({
  selector: 'app-batiment',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class BatimentComponent {
artisans: Top3[] = [];
  selectedProductId: number = 1;
  searchArtisans: string = "";
  order: "asc" | "desc" = "asc";
  

  constructor (
    private router: Router,
    private ArtisanserviceService: ArtisanserviceService,
  ) {}
  
  triArtisans (event:Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value === "asc" || value === "desc") {
      this.order = value;
    }
  }

  

  ngOnInit(): void {
   this.artisans = this.ArtisanserviceService.getArtisans();
  }

  showFigurines(productId: number) {
    this.selectedProductId = productId;
    this.router.navigate(["/product", productId]);
  }
}
