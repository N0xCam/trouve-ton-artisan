import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataArtisan from "../../data/datas.json"

@Injectable({
  providedIn: 'root'
})
export class MyArtisansService {
  private artisans = (dataArtisan as any).default;

  getMyArtisanById(id: string | null ): Observable<any> {
    return of(this.artisans.find ((artisans: { id: string | null; }) => artisans.id === id));

  }

}
