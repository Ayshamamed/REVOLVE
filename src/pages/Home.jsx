import React from 'react';
import Slider from '../HOME/Slider';
import Section from '../HOME/Section';
import SectionTwo from '../HOME/SectionTwo';
import SectionThree from '../HOME/SectionThree';
import CardList from '../HOME/CardList';
import CustomerSays from '../HOME/CustomerSays';
import Statistics from '../HOME/Statistics';

const Home = () => {
  return (
    <div className='home-page'>
      
        <Slider/>
        <CardList/>
        <Section/>
        <SectionTwo/>
        <SectionThree/>
        <Statistics/>
        <CustomerSays/>

    </div>
  )
}

export default Home