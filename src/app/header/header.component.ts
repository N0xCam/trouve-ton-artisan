import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Top3 } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule} from "@angular/common";
import { ArtisanserviceService } from '../artisanservice.service';
import { SearchPipe } from '../pipes/search.pipe';
import { Router } from '@angular/router';

export interface Artisan {
  id: number;
  image: string;
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
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [CommonModule, FormsModule, SearchPipe],
  styleUrl: './header.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})


export class HeaderComponent implements OnInit {
  artisans: Top3[] = [];
    selectedArtisanId: number = 1;
    searchArtisans: string = "";
    order: "asc" | "desc" = "asc";

  constructor (
    private router: Router,
    private ArtisanserviceService: ArtisanserviceService,
  ) { }

  
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

  showArtisans(ArtisanId: number) {
    this.selectedArtisanId = ArtisanId;
    this.router.navigate(["/fiche-artisan", ArtisanId]);
  }
}




