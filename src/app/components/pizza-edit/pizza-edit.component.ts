import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {

  constructor(
    private pizzaService:PizzaService,
    private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  allPizza; 
  pizzaId;
  pizzaForm: FormGroup;
  pizzaEdit;
  pizza;
  submitted = false;


  price:Number;
  pizaaName:String;
  size;
  quantity;
  toppings;

  pizzaList = [
    "Margherita",
    "Fresh Veggie",
    "Country Special",
    "Farmhouse",
    "Mexican Green Wave",
    "Barbeque Chicken",
    "Chicken Mexicana",
];

toppingList = [
  "Black Olives",
  "Crisp Capsicum",
  "Golden Corn",
  "Fresh Tomato",
  "Chunky Chicken",
  "Zesty chicken Sausage",
  "Hot N Spicy Chicken",
  "Extra Cheese",
];

sizes = [
  "small",
  "large",
  "medium",
 
];

  ngOnInit(): void {

    this.pizzaService.getAllPizza().subscribe(r=>{ 
      this.allPizza = r.data.pizzas;

      });

      this.pizzaForm = this.fb.group({
        name: [''],
        size: [''],
        price: [''],
        toppings:[''],
        quantity:['']
    });

    this.route.params.subscribe(params => {
      this.pizzaId = params['id'];
    });

    
    this.pizzaService.editPizza(this.pizzaId).subscribe(r=>{ 
         
            console.log(r.data.pizza.price);
            this.pizzaEdit = r.data.pizza;

            this.price = r.data.pizza.price;
            this.pizaaName = r.data.pizza.name;
            this.size = r.data.pizza.size;
            this.toppings = r.data.pizza.toppings;
            this.quantity = r.data.pizza.quantity;

    });

  }

//Update Pizza Functionality
  updatePizza(){ 

    this.submitted = true;
  
    //stop here if form is invalid
    if (this.pizzaForm.invalid) {
        return;
    }

    this.pizza = this.pizzaForm.value;

    console.log(this.pizza);

    this.pizzaService.updatePizza(this.pizzaId,this.pizza).subscribe(r=> { 
      if(r=== true){ 
        console.log(r);
        this.router.navigate(['/pizza']);
      }
    },
    error => {
      alert(error);
    }
    );

  }




}
