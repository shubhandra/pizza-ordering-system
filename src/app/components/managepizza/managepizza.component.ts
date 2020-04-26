
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza.model';
import { Router } from '@angular/router';
import { PizzaserviceService } from 'src/app/services/pizzaservice.service';

@Component({
  selector: 'app-managepizza',
  templateUrl: './managepizza.component.html',
  styleUrls: ['./managepizza.component.css']
})
export class ManagepizzaComponent implements OnInit {

  constructor( 
    private pizzaService:PizzaserviceService,
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

toppingList= [
  "Black Olives",
  "Crisp Capsicum",
  "Golden Corn",
  "Fresh Tomato",
  "Chunky Chicken",
  "Zesty chicken Sausage",
  "Hot N Spicy Chicken",
  "Extra Cheese",
];
  
  ngOnInit(): void {

      this.pizzaService.getAllPizza().subscribe(r=>{ 
            this.allPizza = r.data.pizzas;
      });

      this.newDynamic = {name: "", size: "",price:""};  
      this.dynamicArray.push(this.newDynamic);  

      this.pizzaForm = this.fb.group({
        name: [''],
        size: [''],
        price: [''],
        toppings:[''],
        quantity:['']
    });

  }

 
get f() { return this.pizzaForm.controls; }

/***********Add Pizza Function  */
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
        
          //Load PIZZA LIST WHEN NEW PIZZA ADDED
          this.pizzaService.getAllPizza().subscribe(r=>{ 
            this.allPizza = r.data.pizzas;
             });
             //

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
    
    this.pizzaService.deletePizza(value).subscribe(r=> { 

      if(r === true){ 
        console.log(r);
      }
        //Load PIZZA LIST WHEN PIZZA Deleted
        this.pizzaService.getAllPizza().subscribe(r=>{ 
          this.allPizza = r.data.pizzas;
           });
           //
    },
    error => {
      console.log(error);
    }
    );

  }

  
 

}

