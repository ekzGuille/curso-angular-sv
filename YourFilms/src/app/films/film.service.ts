import { Injectable } from '@angular/core';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[] = [{
    id: 1,
    name: "Superlópez",
    description: "Desde su llegada a la Tierra procedente del planeta Chitón, la vida de Juan López no ha sido fácil. Con superpoderes es difícil no destacar. Poder volar, leer la mente, tener supervisión o detener un convoy del metro para que no descarrile… y regresar luego a la oficina, esforzándose en ser un tipo normal, no ha sido nada sencillo para él.",
    images: [
      "https://pics.filmaffinity.com/superlopez-456694460-large.jpg",
      "https://pics.filmaffinity.com/superlopez-176494436-large.jpg",
      "https://pics.filmaffinity.com/superlopez-156518700-large.jpg"
    ],
    video: "8BvwQGeqreI",
    points: 3.5
  },
  {
    id: 2,
    name: "Campeones",
    description: "Marco, un entrenador profesional de baloncesto, se encuentra un día, en medio de una crisis personal, entrenando a un equipo compuesto por personas con discapacidad intelectual. Lo que comienza como un problema se acaba convirtiendo en una lección de vida.",
    images: [
      "https://pics.filmaffinity.com/campeones-981723931-large.jpg",
      "https://pics.filmaffinity.com/campeones-520831015-large.jpg",
      "https://pics.filmaffinity.com/campeones-869615818-large.jpg"
    ],
    video: "C0p5-b3YwIM",
    points: 5
  },
  {
    id: 3,
    name: "El mejor verano de mi vida",
    description: "Curro es un fantasioso vendedor de robots de cocina que sueña con un trabajo en el mundo financiero. En plena crisis de pareja, y con fuertes deudas, hace una promesa que no puede cumplir: si su hijo Nico, de 9 años, saca todo sobresalientes, le llevará a unas vacaciones de verano inolvidables. El niño lo consigue y padre e hijo emprenden un viaje que les llevará a conocer gente y vivir situaciones que jamás hubiesen imaginado.",
    images: [
      "https://pics.filmaffinity.com/el_mejor_verano_de_mi_vida-275334251-large.jpg",
      "https://pics.filmaffinity.com/el_mejor_verano_de_mi_vida-386058192-large.jpg"
    ],
    video: "Xq3BmyaHDAQ",
    points: 4.5
  }];

  constructor() { }

  getAll(): Film[] {
    return this.films;
  }

  getBydId(id: number): Film[] {
    return this.films.filter(x => x.id === id);
  }
}
