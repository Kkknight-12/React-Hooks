import { useState } from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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


function App() {
  const [ selected, setSelected ] = useState(options[0]);
  return (
    // <Accordion items={items}/>
    // <Search/>
    <Dropdown selected={selected} onSelectedChange={setSelected}
    options={options}/>
  )
}

export default App;
