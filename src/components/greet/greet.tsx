type GreetProps = {
  name?: string
}

export default function greet(props: GreetProps) {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}
