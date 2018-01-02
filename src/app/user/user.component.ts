import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "app/user/user.service";
import { User } from "app/user/user";

@Component({
  selector: 'sc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  private users: User[] = [];
  private user: User;

  genders = [
    'Male',
    'Female'
  ];

  private emailValid: boolean = true;

  constructor( private userService: UserService) { 

// console.log("cont");
//      this.userService.fetchData().subscribe(
//       (data: any) => {
//         const userArray = [];
//         for(let key in data) {
//           userArray.push(data[key]);
//         }
//         this.users = userArray;
//         console.log(this.users); 
//       }
//     )

    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nic: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      mobileNo: new FormControl('',[Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      gender: new FormControl('Male', Validators.required),
      email: new FormControl('', [Validators.required, 
                                  Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      //passwordData: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', [Validators.required])
      //})
    }); 
  }

  ngOnInit() {
  /*  alert("oninit");
    this.userService.fetchData().subscribe(
      (data: any) => {
        const userArray = [];
        for(let key in data) {
          userArray.push(data[key]);
        }
        this.user = userArray.find(user => user.email === this.userForm.controls['email'].value);
        alert(this.user.email); 
      }
    )*/
    
  }

  onSubmit() {
    this.userService.sendData(this.userForm).subscribe();  
  }

  onReset() {
    this.userForm.reset();
  }

  // checkEmailValidator(control: FormControl) : {[s: string]: boolean} {
  //   alert("validator");
  //   let user: User;

  //   this.userService.fetchData().subscribe(
  //     (data: any) => {
  //       const userArray = [];
  //       for(let key in data) {
  //         userArray.push(data[key]);
  //       }
  //       this.user = userArray.find(user => user.email === this.userForm.controls['email'].value); 
  //     }
  //   )

  //   console.log(this.users);
  //   this.user = this.users.find(user => user.email === this.userForm.controls['email'].value);
  //   console.log(this.user);
  //   if(this.user != undefined || this.user != null) {
  //     if(control.value === this.user.email) {
  //       return {email: true};
  //     }
  //     return null;
  //   }
  //   return null;
  // }




}


