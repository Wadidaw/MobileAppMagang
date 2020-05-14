import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { mainUrl } from 'src/app/services/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profiles: any = [];
  profileUsername = '';
  constructor(private profileService: ProfileService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService) { }

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
  doRefresh(event) {
    this.getData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  goEdit() {
    this.router.navigate(['/profile-edit/' + this.profileUsername])
  }
  goDetail(profiles) {
    console.log('username: ' + profiles.username);
    this.router.navigate(['/profile-detail/' + profiles.username]);
  }
}
