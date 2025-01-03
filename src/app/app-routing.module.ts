import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';

const routes: Routes = [
{ path: "", component: HomeComponent},
{ path: "liste-artisan", component:ListeArtisanComponent},
{ path: "fiche-artisan", component:FicheArtisanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
