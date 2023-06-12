import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'
import Card from '../UI/Card'

const DUMMY_MEAL = [
    {
        id : 'm1',
        name : 'Sushi',
        description : "Finest fish and veggies",
        price : 22.99
    },
    {
        id : 'm2',
        name : 'Sushi',
        description : "Finest fish and veggies",
        price : 22.99
    },
    {
        id : 'm3',
        name : 'Sushi',
        description : "Finest fish and veggies",
        price : 22.99
    },
    {
        id : 'm4',
        name : 'Sushi',
        description : "Finest fish and veggies",
        price : 22.99
    },
    {
        id : 'm5',
        name : 'Sushi',
        description : "Finest fish and veggies",
        price : 22.99
    }
]

const AvailableMeals = () => {

    const mealsList = DUMMY_MEAL.map(meal=><MealItem key={meal.id} id={meal.id} meal={meal} />);

  return (
   <section className={classes.meals} >
        <ul>
        <Card>{
               mealsList
            }
            </Card>
        </ul>
   </section>
  )
}

export default AvailableMeals