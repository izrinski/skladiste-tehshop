import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Laptop } from '../laptop/laptop';

@Component({
  selector: 'app-laptop-nalog',
  templateUrl: './laptop-nalog.component.html',
  styleUrls: ['./laptop-nalog.component.css']
})
export class LaptopNalogComponent  {
  private backupLaptop: Partial<Laptop> = { ...this.data.laptop };

  constructor(
    public dialogRef: MatDialogRef<LaptopNalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LaptopNalogData
  ) { }


  cancel(): void {
    this.data.laptop.cijena = this.backupLaptop.cijena;
    this.data.laptop.isporuka = this.backupLaptop.isporuka;
    this.data.laptop.nadopuna = this.backupLaptop.nadopuna;
    this.data.laptop.zadnjaIzmjena = this.backupLaptop.zadnjaIzmjena;
    this.dialogRef.close(this.data);
  }

}

export interface LaptopNalogData {
  laptop: Partial<Laptop>;
  enableDelete: boolean;
}

export interface LaptopNalogResult {
  laptop: Laptop;
  delete?: boolean;
}