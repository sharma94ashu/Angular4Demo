import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: 'AAAAluVtr3w:APA91bFD6r_1E1LjRr6-o-ymlhcFWMmQCXbMohYzP3RKFJ03KE_MscR6bDoy56UJxJUiB-ohr9fgkgOpp3qvJetSasYS-KJ4J2-L0nhqgE8Jx-8HYQEQBCIbLWT5AFBnqRwGXGd0lEx-',
  authDomain: 'angular2app-594dc.firebaseio.com',
  databaseURL: 'https://angular2app-594dc.firebaseio.com',
  storageBucket: 'angular2app-594dc.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
