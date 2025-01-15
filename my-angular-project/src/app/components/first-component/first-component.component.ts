import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Joao';
  age: number = 30;
  job = 'Programador'

  constructor() { }
  ngOnInit(): void { }
}
