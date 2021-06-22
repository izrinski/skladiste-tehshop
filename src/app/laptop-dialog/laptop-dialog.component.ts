import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laptop } from '../laptop/laptop';

@Component({
  selector: 'app-laptop-dialog',
  templateUrl: './laptop-dialog.component.html',
  styleUrls: ['./laptop-dialog.component.css']
})
export class LaptopDialogComponent {
  private backupLaptop: Partial<Laptop> = { ...this.data.laptop };

  constructor(
    public dialogRef: MatDialogRef<LaptopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LaptopDialogData
  ) { }

  cancel(): void {
    this.data.laptop.id3 = this.backupLaptop.id3;
    this.data.laptop.naziv = this.backupLaptop.naziv;
    this.data.laptop.cijena = this.backupLaptop.cijena;
    this.data.laptop.naLageru = this.backupLaptop.naLageru;
    this.dialogRef.close(this.data);
  }

}

export interface LaptopDialogData {
  laptop: Partial<Laptop>;
  enableDelete: boolean;
}

export interface LaptopDialogResult {
  laptop: Laptop;
  delete?: boolean;
}
