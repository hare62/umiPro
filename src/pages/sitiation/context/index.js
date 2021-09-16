import React from 'react'
import NoContext from './noContext';
import ContextView from './context';
import PreOther from './PreOther';
import PreOther2 from './PreOther2';
import Parent from './parent';
import Apps from './App';



class App extends React.Component {
  render() {
    return (
      <>
        <NoContext></NoContext>
        <ContextView></ContextView>
        <PreOther></PreOther>
        <PreOther2></PreOther2>
        <Parent></Parent>
        <Apps></Apps>
      </>
    );
  }
}

export default App
