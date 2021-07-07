import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MobitelComponent } from './mobitel/mobitel.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MobitelDialogComponent } from './mobitel-dialog/mobitel-dialog.component';
import { TvComponent } from './tv/tv.component';
import { TvDialogComponent } from './tv-dialog/tv-dialog.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopDialogComponent } from './laptop-dialog/laptop-dialog.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MobitelNalogComponent } from './mobitel-nalog/mobitel-nalog.component';
import { LaptopNalogComponent } from './laptop-nalog/laptop-nalog.component';
import { TvNalogComponent } from './tv-nalog/tv-nalog.component';


@NgModule({
  declarations: [
    AppComponent,
    MobitelComponent,
    MobitelDialogComponent,
    LaptopComponent,
    LaptopDialogComponent,
    TvComponent,
    TvDialogComponent,
    MobitelNalogComponent,
    LaptopNalogComponent,
    TvNalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
