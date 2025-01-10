import { Component, OnInit, LOCALE_ID  } from '@angular/core';
import data from "../../data/datas.json";
import { CommonModule} from "@angular/common";


@Component({
  selector: 'app-batiment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class BatimentComponent {

}
