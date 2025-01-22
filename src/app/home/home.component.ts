import { Component } from '@angular/core';
import { SearchArtisanService } from '../services/search-artisan.service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CommonModule} from "@angular/common";
import * as artisanData from "../../data/datas.json"

export interface Artisan {
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './home.component.scss',
})


export class HomeComponent {
  artisans: any[] = (artisanData as any).default;
  
  constructor (
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
 
    };

  }



