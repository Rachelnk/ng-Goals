import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: number[]): number {
    let today:Date =new Date(); // get the current date
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value-todayWithNoTime) //returns value in milliseconds absolute value.
    const secondsInDay = 86400; // 60 seconds * 60 minutes in an hour * 24 hours
    var dateDifferenceSeconds = dateDifference * 0.001; // convert millseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    if(dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;
    } else {
      return 0;

    }

    
  }

}
