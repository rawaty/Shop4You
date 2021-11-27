import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPipe'
})
export class ShortenPipePipe implements PipeTransform {

  transform(value:any ){
    if(value.length>10){
      return value.substr(0,25)+'...';
    }
  }

}
