import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ArtisanserviceService } from './artisanservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  
    ListeArtisanComponent,
    FicheArtisanComponent,
    HeaderComponent,
    FooterComponent,
    LegalComponent,
    NotFoundComponent,
    ServicesComponent,
    
    FabricationComponent,
    AlimentationComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    BatimentComponent,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ArtisanserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
