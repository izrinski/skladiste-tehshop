import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Mobitel } from '../mobitel/mobitel';

@Component({
  selector: 'app-mobitel-nalog',
  templateUrl: './mobitel-nalog.component.html',
  styleUrls: ['./mobitel-nalog.component.css']
})
export class MobitelNalogComponent {
  private backupMobitel: Partial<Mobitel> = { ...this.data.mobitel };

  constructor(
    public dialogRef: MatDialogRef<MobitelNalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MobitelNalogData
  ) { }

  cancel(): void {
    this.data.mobitel.cijena = this.backupMobitel.cijena;
    this.data.mobitel.isporuka = this.backupMobitel.isporuka;
    this.data.mobitel.nadopuna = this.backupMobitel.nadopuna;
    this.data.mobitel.zadnjaIzmjena = this.backupMobitel.zadnjaIzmjena;
    this.dialogRef.close(this.data);
  }

}

export interface MobitelNalogData {
  mobitel: Partial<Mobitel>;
  enableDelete: boolean;
}

export interface MobitelNalogResult {
  mobitel: Mobitel;
  delete?: boolean;
}