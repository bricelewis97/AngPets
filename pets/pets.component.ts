import { Component, OnInit } from '@angular/core';
import { Pet1 } from '../pet';
import { PetService } from '../pet.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  Pets?: Pet1[];
  selectedPet1?: Pet1;
  constructor(private petService: PetService, private messageService: MessageService) { }
  getPets(): void {
    this.petService.getPets()
      .subscribe(Pets => this.Pets = Pets);
  }
  ngOnInit() {
    this.getPets();
  }
  onSelect(pets: Pet1): void {
    this.selectedPet1 = pets;
    this.messageService.add(`PetComponent: Selected pet id=${pets.id}`)
  }
}
