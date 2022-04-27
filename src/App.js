import React, { useState } from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import Count from './Count'
import AreaSplit from './AreaSplit'
import Stacked from './Stacked'
import './App.css';

export default function App() {
  const [buttonCount, setButtonCount] = useState(0);

  function onClickHandler0() {
    setButtonCount(0);
    console.log(0)
  }
  
  function onClickHandler1() {
    setButtonCount(1);
    console.log(1)
  }

  function onClickHandler2() {
    setButtonCount(2);
    console.log(2)
  }

  function getComponent() {
    if(buttonCount === 0) {
      return <Count />
    } else if(buttonCount === 1) {
      return <AreaSplit />
    } if(buttonCount === 2) {
      return <Stacked />
    }
  }

  return ( 
    <>
      <div className="buttonParent">
        <DefaultButton onClick={onClickHandler0} checked={buttonCount === 0}>
          STS Tests - Reliability
        </DefaultButton>

        <DefaultButton onClick={onClickHandler1} checked={buttonCount === 1}>
          STS Tests - Area distribution
        </DefaultButton>

        <DefaultButton onClick={onClickHandler2} checked={buttonCount === 2}>
          STS Tests - Reliability by percentage bucket
        </DefaultButton>
      </div>

       {getComponent()}
    </>    
  );
}
