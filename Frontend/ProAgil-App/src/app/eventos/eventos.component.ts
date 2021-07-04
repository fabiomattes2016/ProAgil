import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  larguraImg: number = 150;
  margemImg: number = 2;
  mostrarImg: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      (response) => (this.eventos = response),
      (error) => console.log(error)
    );
  }

  public mostrarImagem(): boolean {
    return (this.mostrarImg = !this.mostrarImg);
  }
}
