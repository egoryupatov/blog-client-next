interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps) {
  return <button className="btn_login">{props.text}</button>;
}
