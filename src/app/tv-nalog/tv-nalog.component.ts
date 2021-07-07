import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tv } from '../tv/tv';

@Component({
  selector: 'app-tv-nalog',
  templateUrl: './tv-nalog.component.html',
  styleUrls: ['./tv-nalog.component.css']
})
export class TvNalogComponent {
  private backupTv: Partial<Tv> = { ...this.data.tv };

  constructor(
    public dialogRef: MatDialogRef<TvNalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TvNalogData
  ) { }

  cancel(): void {
    this.data.tv.cijena = this.backupTv.cijena;
    this.data.tv.isporuka = this.backupTv.isporuka;
    this.data.tv.nadopuna = this.backupTv.nadopuna;
    this.dialogRef.close(this.data);
  }

}

export interface TvNalogData {
  tv: Partial<Tv>;
  enableDelete: boolean;
}

export interface TvNalogResult {
  tv: Tv;
  delete?: boolean;
}