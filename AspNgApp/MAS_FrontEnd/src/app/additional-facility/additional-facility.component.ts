import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-additional-facility',
  templateUrl: './additional-facility.component.html',
  styleUrls: ['./additional-facility.component.scss'] 
  //testnnn
})
export class AdditionalFacilityComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Additional Facility';
  subTitle:string='Create';
  mode:string;
  public values: string[];
executeFunction: Function;
  constructor(private http: HttpClient) { 

    this.http.get(environment.server + 'api/NewAffiliationApi').subscribe(result => {
      this.values = result as string[];
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
