import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
})
export class VaccineComponent implements OnInit {
  petList = [
    { name: 'Cat', vaccine: 'dog', applied: true },
    { name: 'teste', vaccine: 'dog', applied: true },
    { name: 'teste', vaccine: 'dog', applied: true },
  ];

  activeIndex: number = 0;
  pets = [
    { name: 'Nino', pet: 'cat' },
    { name: 'Rome', pet: 'dog' },
  ];

  selectedPet: any;

  formGroup!: FormGroup;
  petForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      selectedPet: [null],
    });

    this.petForm = this.fb.group({
      petName: ['', Validators.required],
      petCategory: ['', Validators.required],
    });
  }

  onPetChange(event: any) {
    return (this.selectedPet = event.value.name);
  }

  registerPet() {
    if (this.petForm.valid) {
      console.log('Pet cadastrado com sucesso:', this.petForm.value);
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }
}
