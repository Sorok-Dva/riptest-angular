import { Component, OnInit } from '@angular/core';
import { JsontestService } from '../../services/jsontest/jsontest.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-show-datetime',
  templateUrl: './show-datetime.component.html',
})

export class ShowDateTimeComponent implements OnInit {
	public loader = false;
	public dateTime: Date = null;

	constructor(private _jsontest: JsontestService) {}

	public ngOnInit() {
		this.getDatetime();
	}
	public getDatetime() {
		this.loader = true;
		this._jsontest.getDateTime().pipe(delay(500)).subscribe((response) => {
			const dateUTC = new Date(response.milliseconds_since_epoch);
			const offsetSydney = 11 * 60 * 60 * 1000; // UTC+11
			this.dateTime = new Date(dateUTC.getTime() + offsetSydney);
		});
	}
}
