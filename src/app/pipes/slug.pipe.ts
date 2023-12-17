import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug',
  standalone: true
})
export class SlugPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/[^\w]/g, '-').replace(/\-+/, '-');
  }
}
