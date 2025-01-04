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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeArtisanComponent,
    FicheArtisanComponent,
    HeaderComponent,
    FooterComponent,
    LegalComponent,
    NotFoundComponent,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
