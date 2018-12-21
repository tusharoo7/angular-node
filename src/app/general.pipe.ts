import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'general'
})
export class GeneralPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;

    return categories.filter(function(category){
      return category.departmentname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
