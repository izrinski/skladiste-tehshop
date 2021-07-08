import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Mobitel } from '../mobitel/mobitel';

@Component({
  selector: 'app-mobitel-dialog',
  templateUrl: './mobitel-dialog.component.html',
  styleUrls: ['./mobitel-dialog.component.css']
})
export class MobitelDialogComponent {
  private backupMobitel: Partial<Mobitel> = { ...this.data.mobitel };

  constructor(
    public dialogRef: MatDialogRef<MobitelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MobitelDialogData
  ) { }

  cancel(): void {
    this.data.mobitel.naziv = this.backupMobitel.naziv;
    this.data.mobitel.cijena = this.backupMobitel.cijena;
    this.data.mobitel.naLageru = this.backupMobitel.naLageru;
    this.data.mobitel.zadnjaIzmjena = this.backupMobitel.zadnjaIzmjena;
    this.dialogRef.close(this.data);
  }

}

export interface MobitelDialogData {
  mobitel: Partial<Mobitel>;
  enableDelete: boolean;
}

export interface MobitelDialogResult {
  mobitel: Mobitel;
  delete?: boolean;
}
