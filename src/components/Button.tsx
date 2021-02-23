interface ButtonsProps {
  color?: string;
}

export function Button(props: ButtonsProps) {
  return(
    <button type="button" style={{ backgroundColor: props.color }}>
      Enviar <br/>
      {props.color}
    </button>
  )
}