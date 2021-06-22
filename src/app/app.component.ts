import { Component } from '@angular/core';
import { Mobitel } from './mobitel/mobitel';
import { Tv } from './tv/tv';
import { Laptop } from './laptop/laptop';
import { MatDialog } from '@angular/material/dialog';
import { MobitelDialogComponent,MobitelDialogResult } from './mobitel-dialog/mobitel-dialog.component';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { TvDialogComponent,TvDialogResult } from './tv-dialog/tv-dialog.component';
import { LaptopDialogComponent, LaptopDialogResult} from './laptop-dialog/laptop-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  laptopiKolekcija: AngularFirestoreCollection<Laptop>;
  tviKolekcija: AngularFirestoreCollection<Tv>;
  mobiteliKolekcija: AngularFirestoreCollection<Mobitel>;

  laptopi: Observable<Laptop[]>;
  tvi: Observable<Tv[]>;
  mobiteli: Observable<Mobitel[]>;

  constructor(private dialog: MatDialog, private store: AngularFirestore) {
    this.laptopiKolekcija = this.store.collection('laptopi');
    this.tviKolekcija = this.store.collection('tvi');
    this.mobiteliKolekcija = this.store.collection('mobiteli');

    this.laptopi = this.laptopiKolekcija.valueChanges({ idField: 'id' });
    this.tvi = this.tviKolekcija.valueChanges({ idField: 'id' });
    this.mobiteli = this.mobiteliKolekcija.valueChanges({ idField: 'id' });
  }



  editMobitel(list: 'mobiteli', mobitel: Mobitel): void {
    const dialogRef = this.dialog.open(MobitelDialogComponent, {
      width: '270px',
      data: {
        mobitel,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: MobitelDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(mobitel.id).delete();
      } else {
        this.store.collection(list).doc(mobitel.id).update(mobitel);
      }
    });
  }

  editTv(list: 'tvi', tv: Tv): void {
    const dialogRef = this.dialog.open(TvDialogComponent, {
      width: '270px',
      data: {
        tv,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TvDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(tv.id).delete();
      } else {
        this.store.collection(list).doc(tv.id).update(tv);
      }
    });
  }

  editLaptop(list: 'laptopi', laptop: Laptop): void {
    const dialogRef = this.dialog.open(LaptopDialogComponent, {
      width: '270px',
      data: {
        laptop,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: LaptopDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(laptop.id).delete();
      } else {
        this.store.collection(list).doc(laptop.id).update(laptop);
      }
    });
  }


  noviMobitel(): void {
    const dialogRef = this.dialog.open(MobitelDialogComponent, {
      width: '270px',
      data: {
        mobitel: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: MobitelDialogResult) =>
        this.store.collection('mobiteli').add(result.mobitel)
      );
  }

  noviTv(): void {
    const dialogRef = this.dialog.open(TvDialogComponent, {
      width: '270px',
      data: {
        tv: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TvDialogResult) =>
        this.store.collection('tvi').add(result.tv)
      );
  }

  noviLaptop(): void {
    const dialogRef = this.dialog.open(LaptopDialogComponent, {
      width: '270px',
      data: {
        laptop: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: LaptopDialogResult) =>
        this.store.collection('laptopi').add(result.laptop)
      );
  }


    key: string = 'id';
    reverse: boolean = false;
    sort(key: string) {
      this.key = key;
      this.reverse = !this.reverse;
    }

    key2: string = 'id';
    reverse2: boolean = false;
    sort2(key2: string) {
      this.key2 = key2;
      this.reverse2 = !this.reverse2;
    }

    key3: string = 'id';
    reverse3: boolean = false;
    sort3(key3: string) {
      this.key3 = key3;
      this.reverse3 = !this.reverse3;
    }


}  
