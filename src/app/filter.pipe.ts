import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    if (term === undefined) return movies;
    return movies.filter(function(movie){
      return movie.mtitle.toLowerCase().includes(term.toLowerCase());
    })
  }

}
