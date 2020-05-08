import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstPipe'
})

export class FirstPipe implements PipeTransform {
    transform(n: number) {
        return (n*n);
    }
}