import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client'

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const stompConfig: StompConfig = {
  url:  new SockJS(''),
  headers: {},
  heartbeat_in: 0,
  heartbeat_out: 20000,
  reconnect_delay: 0,
  debug: true
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicModule.forRoot(
      { 
        mode: 'ios',
        backButtonText: 'voltar'
      }
    ), 
    AppRoutingModule,
  ],
  providers: [
    StompService, {
      provide: StompConfig,
      useValue: stompConfig
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
