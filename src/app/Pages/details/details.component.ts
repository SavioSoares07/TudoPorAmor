import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  adopt() {
    const name = 'Mel';
    const breed = 'Shiba Inu';
    const age = '2 Anos';

    const phoneNumber = '88999922612';
    const message = `Olá! Tenho interesse em adotar o pet com as seguintes informações:\nNome: ${name}\nRaça: ${breed}\nIdade: ${age}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
