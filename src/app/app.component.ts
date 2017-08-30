import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AngularFireDatabase]
})
export class AppComponent implements OnInit{
  title = 'app';
  model={};
  hostEl:any;
  items: FirebaseListObservable<any[]>;
  key:string = null;
  btn_Name: string = 'Add New Data';
  constructor(private db: AngularFireDatabase, private el: ElementRef,private renderer: Renderer2) {
    this.items = db.list('/users');
    this.hostEl =  el.nativeElement;
    console.log(this.items);
  }

  ngOnInit() {
    //this.items.getLength()
    let change_this;
    change_this= this.renderer.createElement('span');
    this.renderer.addClass(change_this, 'change_this');
    this.renderer.appendChild(this.hostEl, change_this);      
  }

  addToDb() {
    if(this.btn_Name == 'Add New Data') {
      console.log(this.items);
      console.log(this.model);
      this.db.list('/users/').push(this.model);
    } else {
      //console.log(this.items.length)
      this.items.forEach((item:any)=>{
        console.log('fn');
        this.db.object('/users/'+item.$key)
        .update(this.model)
        .then(()=>console.log("Success"))
        .catch(()=>console.log("error"));
      });
     
      this.model['username'] = '';
      this.model['password'] = '';
      this.btn_Name = 'Add New Data';
    }
  }
  
  updateToDb(item:any) {
    this.key = item.$key;
    this.model['username'] = item.username;
    this.model['password'] = item.password;
    this.btn_Name = 'Update';
    
  }
}
