import React from 'react';

import SectionOne from '../components/SectionOne';
import Slider from '../components/Slider';
import Section from '../components/Section';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <div>
        <Slider/>
        <CardList/>
        <Section/>
        <SectionTwo/>
        <SectionThree/>
        <SectionOne/>

    </div>
  )
}

export default Home