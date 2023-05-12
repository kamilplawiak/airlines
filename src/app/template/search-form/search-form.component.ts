import { ThisReceiver } from '@angular/compiler';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, AfterContentInit {
  showIcao = false;
  showIata = false;
  queryParams = {
    'name': 'lot',
    'icao': '',
    'iata': ''
  }

  constructor(public httpService: HttpService) {}

  form = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'showIcao': new FormControl(false),
    'icao': new FormControl('', [Validators.minLength(3), Validators.maxLength(3)]),
    'showIata': new FormControl(false),
    'iata': new FormControl('', [Validators.minLength(2), Validators.maxLength(2)])
  })

  ngOnInit(): void {
    [this.form.get('name'), this.form.get('icao'), this.form.get('iata')].forEach((control) => {
      control?.valueChanges.pipe(
        distinctUntilChanged(),
        debounceTime(750)
      ).subscribe((value) => {
        const group = control["_parent"].controls;
        const name = Object.keys(group).find(name => control === group[name]);

        if(value) this.queryParams[name as keyof typeof this.queryParams] = value;

        if(this.form.valid)
          this.httpService.getAirline(this.queryParams.name, this.queryParams.icao, this.queryParams.iata)
          .subscribe(console.log);
      })
    })
  }

  ngAfterContentInit(): void {
    this.form.get('showIcao')?.valueChanges.subscribe((value) => {
      this.showIcao = value as boolean;
    });

    this.form.get('showIata')?.valueChanges.subscribe((value) => {
      this.showIata = value as boolean;
    });
  }
}
