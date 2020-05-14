import { Component, OnInit } from '@angular/core';
import { PersetujuanService } from 'src/app/services/persetujuan.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-mandiri',
  templateUrl: './mandiri.page.html',
  styleUrls: ['./mandiri.page.scss'],
})
export class MandiriPage implements OnInit {
  profiles: any = [];
  persetujuan: any = {}
  
  constructor(private profileService: ProfileService,
    private persetujuanService: PersetujuanService,
    private modalCtrl: ModalController,
    private utils: UtilsService) { }

  ngOnInit() {
  }
  getData() {
    this.profileService.getProfileBy('mhs').subscribe(
      (response) => {
        console.log(response);
        this.profiles = response;
        
        console.log(this.profiles);
      },
      (err) => {
        this.profiles = [];
        console.log(JSON.stringify(err));
        this.utils.showToast('Terjadi kesalahan');
      });
  }
  ionViewWillEnter() {
    this.getData();
  }

  submit() {
    this.persetujuanService.createPersetujuan(this.persetujuan).subscribe((response) => {
      console.log(response);
      this.utils.showToast('Berhasil ditambahkan');
      this.modalCtrl.dismiss();
    }, (err) => {
      console.log(JSON.stringify(err));
      this.utils.showToast('Terjadi kesalahan');
    });
  }
  closePage() {
    this.modalCtrl.dismiss();
  }
}
