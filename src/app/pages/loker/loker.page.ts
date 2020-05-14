import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { mainUrl } from 'src/app/services/config';
import { IonSlides } from '@ionic/angular';
import { LowonganService } from 'src/app/services/lowongan.service'
@Component({
  selector: 'app-loker',
  templateUrl: './loker.page.html',
  styleUrls: ['./loker.page.scss'],
})
export class LokerPage {
  lokers: any = [];

  constructor(    
    private lowonganService: LowonganService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService
    ) { }

    getData() {
      this.lowonganService.getLowongan('Teknik Multimedia & Jaringan').subscribe(
        (response) => {
          console.log(response);
          this.lokers = response;
          
          console.log(this.lokers);
        },
        (err) => {
          this.lokers = [];
          console.log(JSON.stringify(err));
          this.utils.showToast('Terjadi kesalahan');
        });
    }
    ionViewWillEnter() {
      this.getData();
    }
    doRefresh(event) {
      this.getData();
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }

    goDetail(loker) {
      console.log('prodi: ' + loker.prodi);
      this.router.navigate(['/loker-detail/' + loker.prodi]);
    }
slideOpts = {
  slidesPerView: 4,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
}}

slideOptions = {
  initialSlide: 1,
  speed: 400,
  autoplay:true
};

slidesDidLoad(slides: IonSlides) {
  slides.startAutoplay();
}
}
