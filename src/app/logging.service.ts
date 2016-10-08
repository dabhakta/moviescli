import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  log(movie: any){
    console.log(movie);
  }

  loghome(){
    console.log("Almost nothing.");
  }

}
