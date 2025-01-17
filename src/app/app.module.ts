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
import { HttpClientModule } from '@angular/common/http';
import { TopPipe } from '../app/pipes/top.pipe';
import { SortByNamePipe } from './pipes/filter-by-name.pipe';
import { BatimentPipe } from './pipes/batiment.pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { FilterByLocationPipe } from './pipes/filter-by-location.pipe';
import { FilterVySpecialyPipe } from './pipes/filter-by-specialy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LegalComponent,
    NotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    HeaderComponent,

    AppRoutingModule,
    HttpClientModule,
    FicheArtisanComponent,
    ListeArtisanComponent,
    BatimentPipe,
    FilterByCategoryPipe,
    SortByNamePipe,
    TopPipe,
    FilterByLocationPipe,
    FilterVySpecialyPipe,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
