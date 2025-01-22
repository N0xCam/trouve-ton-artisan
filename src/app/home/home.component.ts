import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CommonModule} from "@angular/common";
import * as artisanData from "../../data/datas.json"

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



