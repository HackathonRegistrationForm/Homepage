import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  addproductForm! : FormGroup
//variables
 owner:any;
 UPC_code:any;
 category:any;
 name: any;
 price:any;
 description:any;
 quantity:any;
 image:any;

  constructor() { }
  ngOnInit(): void {
  
  }
  onSubmit(){

    //firt thing is we got the variables 
    console.log('isbuttonclicked')
    console.log(this.name)
    console.log(this.price)
    console.log(this.description)
    console.log(this.quantity)
    console.log(this.image)
    console.log(this.owner)
    console.log(this.UPC_code)
    console.log(this.category)

   //now we have to make an api call and send the request body

  //  let Obj = JSON.stringify({
  //   "owner": this.owner,
  //   "UPC_code": this.UPC_code,
  //   "name": this.name,
  //   "description": this.description,
  //   "category": this.category,
  //   "Quantity": this.quantity,
  //   "price": this.price,
  //   "image": this.image
  // });

 const Obj= {
  owner:'63633b059f634446f5578158',
  UPC_code:23458,
  name:'mobile',
  description:'hduygdfnfbh',
  category:'Products',
  quantity:7,
  price:'15000',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoQNsjHGnMW7RR-WKP4NAmheFUhzB0TLogg&usqp=CAU'

}

//now send http request
var requestOptions = {
  method: 'POST',
  body:JSON.stringify(Obj)
};

console.log(requestOptions)

fetch("http://localhost:7000/itemRoutes/create",{
  method:'post',
  headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type":'application/json'
  },
  body:JSON.stringify(Obj)

})  .then(response => response.json())
.then(result =>
   console.log(result))
.catch(error => console.log('error', error));
 

  }
  
}
