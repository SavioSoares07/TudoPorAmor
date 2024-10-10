import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload'; // Importando o FileUploadEvent

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
  providers: [MessageService],
})
export class VaccineComponent {
  constructor(private messageService: MessageService) {}
  petName: string = '';
  petAge: number | null = null;
  petType: string = '';
  // Usando FileUploadEvent ao invés de uma interface personalizada
  onUpload(event: FileUploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Sucesso',
      detail: 'Arquivo carregado com sucesso',
    });
  }

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
}
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
