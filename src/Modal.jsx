import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return <div>{props.children}</div>;
  }
}
