import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private router: Router, private service:ServiceService) { }

  ngOnInit() {
  }
  Guardar(persona:Persona) {
    this.service.createPersona(persona)
    .subscribe(data => {
      alert("Se agrego con éxito ...!!");
      this.router.navigate(["listar"]);
    })
  }
}
