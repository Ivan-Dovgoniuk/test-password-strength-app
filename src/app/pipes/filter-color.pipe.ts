import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: string,password:string,sectionNumber:number): string {

    const passwordExist = password.length !=0

    if(passwordExist){

        const symbolsExist = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
        const letersExist =/[a-zA-Z]/g.test(password)
        const numbersExist = /\d/.test(password)

        const onlyLetters = /^[a-zA-Z]*$/.test(password);
        const onlyNumbers =/^\d+$/.test(password)
        const onlySymbols = !letersExist && !numbersExist && symbolsExist

        const easy = onlyLetters || onlyNumbers || onlySymbols

        const medium = (numbersExist && letersExist && !symbolsExist) || 
                      (letersExist && symbolsExist && !numbersExist) ||
                      (symbolsExist && numbersExist && !letersExist) ? true : false

        const strong = numbersExist && letersExist && symbolsExist

        if(password.length <8 ) return 'red'
        if(easy && sectionNumber == 1) return 'red'
        if(medium && (sectionNumber == 1 || sectionNumber == 2)) return 'yellow'
        if(strong) return 'green'
    }
    
    return value;
  }

}
