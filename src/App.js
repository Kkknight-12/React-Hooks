import { useState } from 'react';
import Header from './components/Header'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const items = [
    {
        title: 'What is React ?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React ?',
        content: 'React is a favorite JS library among enginners'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

const showAccordion = () => {
  if(window.location.pathname ==='/') {
    return <Accordion items={items}/>
  }
}

const showDropdown= () => {
  if(window.location.pathname ==='/dropdown') {
    return <Dropdown />
  }
}
const showList = () => {
  if(window.location.pathname ==='/list') {
    return <Search />
  }
}

const showTranslate = () => {
  if(window.location.pathname ==='/translate') {
    return <Translate />
  }
}

function App() {
  const [ selected, setSelected ] = useState(options[0]);
  return (
    <div>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Accordion items={items}/>
        </Route>
        <Route exact path="/search">
          <Search/>
        </Route>
        <Route exact path="/translate">
          <Translate/>
        </Route>
        <Route exact path="/dropdown">
          <Dropdown 
          label="Select A Color"
          selected={selected} 
          onSelectedChange={setSelected}
          options={options}/>
            <div>
              <h3 
              id='select-color'
              style= {{color:`${selected.value}`}}>
                  {`This color is ${selected.value}`}
              </h3>
            </div>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
