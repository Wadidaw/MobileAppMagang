import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-daftarmagang',
  templateUrl: './daftarmagang.page.html',
  styleUrls: ['./daftarmagang.page.scss'],
})
export class DaftarmagangPage implements OnInit {
  persetujuan: any = {}
  constructor(
    private modalCtrl: ModalController,
    private utils: UtilsService
  ) { }
  ngOnInit() {
  }

}
