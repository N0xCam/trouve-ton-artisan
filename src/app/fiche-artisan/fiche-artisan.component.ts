import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MyArtisansService } from '../services/my-artisans.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent {
  artisans: any | null= null;
  messageSent: boolean = false;
  constructor (private route: ActivatedRoute, private MyArtisansService: MyArtisansService) {}


ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    
    this.MyArtisansService.getMyArtisanById(id).subscribe((artisan: any) => {
      this.artisans = artisan;
    });
  });
}

public emailSent(e: Event) {
e.preventDefault();

emailjs
  .sendForm('service_p8x0044', 'template_83ipil5', e.target as HTMLFormElement, {
    publicKey: 'JJGoBKX6MUn3en-Ek',
  })
  .then(
    () => {
      console.log('SUCCESS!');
      this.messageSent = true; 
      (e.target as HTMLFormElement).reset(); 
    },
    (error) => {
      console.log('FAILED...', (error as EmailJSResponseStatus).text);
    },
  );
}
}