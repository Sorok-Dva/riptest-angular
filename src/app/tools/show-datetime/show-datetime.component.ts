import { Component } from '@angular/core';
import { JsonTestService } from '../json-test.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './show-datetime.component.html',
})

export class DateTimeComponent {
  dateTime: Date;
  constructor(private jsonTestService: JsonTestService) {
    this.jsonTestService.getDateTime().subscribe((response) => {
      const date = new Date(response.time);
      date.setTime(date.getTime() + date.getTimezoneOffset() * 60000);
      const sydneyOffset = 630; // Sydney timezone offset in minutes
      date.setTime(date.getTime() + sydneyOffset * 60 * 60 * 1000);
      this.dateTime = date;
    });
  }
}
