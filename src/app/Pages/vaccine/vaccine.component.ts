import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
})
export class VaccineComponent implements OnInit {
  activeIndex: number = 0;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  formGroup!: FormGroup;
  petForm!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCity: new FormControl(null),
    });

    this.petForm = new FormGroup({
      petName: new FormControl('', Validators.required),
      petCategory: new FormControl('', Validators.required),
    });
  }

  registerPet() {
    if (this.petForm.valid) {
      // Lógica para registrar o pet
      console.log('Pet cadastrado com sucesso:', this.petForm.value);
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }
}
