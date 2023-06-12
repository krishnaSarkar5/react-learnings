import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'
import Card from '../UI/Card'

const DUMMY_MEAL = [
    {
        id : 'm1',
        name : 'Mixed Fried Rice',
        description : "Fried rice with egg, chicken and prawns.",
        price : 130.87
    },
    {
        id : 'm2',
        name : 'Boneless Chilli Chicken Dry',
        description : "Boneless chicken cubes are marinated, fried and seasoned in spicy tangy sauce (Dry)",
        price : 194.55
    },
    {
        id : 'm3',
        name : 'Boneless Chicken Manchurian',
        description : "Indian-Chinese fusion dish made with boneless chicken and Manchurian sauce",
        price : 210.81
    },
    {
        id : 'm4',
        name : 'Schezwan Fish',
        description : "Indian-Chinese fusion dish made with battered and fried fish tossed in Schezwan sauce",
        price : 250.25
    },
    {
        id : 'm5',
        name : 'Egg Hakka Chowmein',
        description : "Noodles stir-fried with vegetables, Hakka spices and scrambled eggs",
        price : 110.62
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