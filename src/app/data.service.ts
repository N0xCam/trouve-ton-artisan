import { Injectable } from '@angular/core';
import {dataArtisans} from "../../src/data/datas.json"

@Injectable({
  providedIn: 'root'
})
export class DataService {
ListArtisans = dataArtisans

}
