import { GreetProps } from "./Greet.types"

export default function Greet(props: GreetProps) {
  return (
    <div>
      hello {props.name}
    </div>
  )
}
