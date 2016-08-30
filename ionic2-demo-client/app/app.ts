import {Component, PLATFORM_DIRECTIVES} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuComponent} from './components/menu/menu.component'


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
   {provide: PLATFORM_DIRECTIVES, useValue: MenuComponent, multi: true}
]);