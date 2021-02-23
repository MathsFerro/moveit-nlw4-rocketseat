import { useState } from 'react'

interface ButtonsProps {
  color?: string;
  children: string;
}

export function Button(props: ButtonsProps) {
  const [counter, setCounter] = useState(0)
  
  const increment = () => setCounter(counter+1)  

  return(
    <button 
      type="button" 
      style={{ backgroundColor: props.color }}
      onClick={increment}
      >
      {props.children} <br/>
      {props.color} <br/>
      Qtd. Cliques {counter}
    </button>
  )
}