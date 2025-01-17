import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeArtisanComponent } from './liste-artisan/liste-artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { LegalComponent } from './legal/legal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: "", component: HomeComponent},


{path: 'list', component : ListeArtisanComponent},
    {path: 'list/:category', component : ListeArtisanComponent},
    {path: 'fiche-artisan/:id', component : FicheArtisanComponent},


{ path: "legal", component:LegalComponent},
{ path: "**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
