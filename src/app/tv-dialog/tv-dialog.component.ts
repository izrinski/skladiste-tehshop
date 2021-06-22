import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tv } from '../tv/tv';

@Component({
  selector: 'app-tv-dialog',
  templateUrl: './tv-dialog.component.html',
  styleUrls: ['./tv-dialog.component.css']
})
export class TvDialogComponent {
  private backupTv: Partial<Tv> = { ...this.data.tv };

  constructor(
    public dialogRef: MatDialogRef<TvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TvDialogData
  ) { }

  cancel(): void {
    this.data.tv.id2 = this.backupTv.id2;
    this.data.tv.naziv = this.backupTv.naziv;
    this.data.tv.cijena = this.backupTv.cijena;
    this.data.tv.naLageru = this.backupTv.naLageru;
    this.dialogRef.close(this.data);
  }

}

export interface TvDialogData {
  tv: Partial<Tv>;
  enableDelete: boolean;
}

export interface TvDialogResult {
  tv: Tv;
  delete?: boolean;
}
