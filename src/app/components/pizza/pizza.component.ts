import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor( 
    private pizzaService:PizzaService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  allPizza;  
  pizzaForm: FormGroup;

  dynamicArray:Array<Pizza>  = [];  
  newDynamic: any = {};  
  submitted = false;

  pizza:Pizza;

  pizzaList = [
    "Margherita",
    "Fresh Veggie",
    "Country Special",
    "Farmhouse",
    "Mexican Green Wave",
    "Barbeque Chicken",
    "Chicken Mexicana",
];
  
  ngOnInit(): void {

      this.pizzaService.getAllPizza().subscribe(r=>{ 
            this.allPizza = r.data.pizzas;
      });

      this.newDynamic = {name: "", size: "",price:""};  
      this.dynamicArray.push(this.newDynamic);  

      this.pizzaForm = this.fb.group({
        name: ['', Validators.required],
        size: ['', Validators.required],
        price: ['', Validators.required],
        toppings:['',Validators.required],
        quantity:['',Validators.required]
    });

  }

  initItem(){ 
    return this.fb.group({
          name: [''],
          size: [''],
          price: ['']
      });
  }


  // addRow() {    
  //   this.newDynamic = {name: "", size: "",price:""};  
  //   this.dynamicArray.push(this.newDynamic);  
  //   console.log(this.dynamicArray);  
  //   return true;  
  // }  

  addRow() {    

     const control = <FormArray>this.pizzaForm.controls['itemRows'];
     control.push(this.initItem());
    }  

//   deleteRow(index) {  
//     if(this.dynamicArray.length ==1) {  
//         return false;  
//     } else {  
//         this.dynamicArray.splice(index, 1);  
//         return true;  
//     }  
// }  

get f() { return this.pizzaForm.controls; }

  addPizza(){ 

      this.submitted = true;
  
      //stop here if form is invalid
      if (this.pizzaForm.invalid) {
          return;
      }

      this.pizza = this.pizzaForm.value;

     // console.log(this.pizza);

      this.pizzaService.savePizza(this.pizza).subscribe(r=> { 
        if(r=== true){ 
          console.log(r);
          this.router.navigate(['/pizza']);
        }else{ 
          alert("Something Wrong");
        }
      },
      error => {
        alert(error);
      }
      );
      
    

  }

  deletePizza(e){ 

    var target = e.target || e.srcElement || e.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    
    console.log(value);

    this.pizzaService.deletePizza(value).subscribe(r=> { 
      if(r=== true){ 
        console.log(r);
        this.router.navigate(['/pizza']);
      }
    },
    error => {
      console.log(error);
    }
    );

  }

  
 

}
