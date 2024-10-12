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
    { namePet: 'Nina', vaccine:"Vacina x", age : 1, applied: 'True' },
  ];
  displayedColumns: string[] = [ 'namePet', 'vaccine', 'age', 'applied'];
  dataSource = this.ELEMENT_DATA;
}
interface PeriodicElement {
  namePet: string;
  age : number;
  vaccine: string;
  applied: string;
}
