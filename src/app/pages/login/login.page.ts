import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: any = [];
  username: string;
  password: string;
  disabledButton;
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private utils: UtilsService,
    private storage: Storage) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.disabledButton = false;
  }
  async tryLogin1() {
    this.navCtrl.navigateRoot(['/home']);
  }
}
