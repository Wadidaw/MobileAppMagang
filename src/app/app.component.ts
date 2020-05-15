import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public navCtrl: NavController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('storage_xxx').then((res)=>{
      if(res == null){
        this.navCtrl.navigateRoot(['/index']);
      }else{
        this.navCtrl.navigateRoot(['/home']);
      }
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Loker",
        url   : "/loker",
        icon  : "newspaper-outline"
      },
      {
        title : "Profile",
        url   : "/profile",
        icon  : "person-outline"
      },
      {
        title : "Mandiri",
        url   : "/mandiri",
        icon  : "newspaper-outline"
      },
      {
        title : "Logout",
        url   : "/index",
        icon  : "exit-outline"
      },
    ]
  }
}
