import React from 'react'
import './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header} >
            <h1>Foodie</h1>
            <HeaderCartButton onShow={props.onShow}/>
        </header>
        
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="" />
        </div>
    </>
  )
}

export default Header