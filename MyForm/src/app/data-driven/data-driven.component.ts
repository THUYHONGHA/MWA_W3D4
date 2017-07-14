import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  ddForm: FormGroup;
  name: FormControl;
  email: FormControl;
  post: FormControl;

  userInfo: any;
  postInfo: any;

  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.post = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.ddForm = fb.group({
      name: this.name,
      email: this.email,
      post: this.post
    });
    this.ddForm.statusChanges.subscribe(
      (data: any) => console.log('ddForm status changed: ', data)
    );

    this.httpService.getUsers().subscribe(
      response => this.userInfo = JSON.parse(response['_body']),
      error => console.log('getUsers failed:', error)
    );
    this.httpService.getPosts().subscribe(
      response => this.postInfo = (JSON.parse(response['_body'])).map(item => item.body).join("\n"),
      error => console.log('getPosts failed', error)
    );
  }

  onSubmit() {
    console.log(this.ddForm.value);
  }

  getData() {
    this.ddForm.controls['name'].setValue(this.userInfo.name);
    this.ddForm.controls['email'].setValue(this.userInfo.email);
    this.ddForm.controls['post'].setValue(this.postInfo);
  }

  ngOnInit() {
  }

}
