interface ButtonsProps {
  color?: string;
  children: string;
}

export function Button(props: ButtonsProps) {
  return(
    <button type="button" style={{ backgroundColor: props.color }}>
      {props.children} <br/>
      {props.color}
    </button>
  )
}