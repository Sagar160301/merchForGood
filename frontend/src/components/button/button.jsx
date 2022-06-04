import "./button.scss";

export const Button = (props) => {
  return (
    <div
      className={`button ${props.className ? props.className : null}`}
      onClick={props.onClick}
    >
      <div>
        {props.string ? props.string : null}
        {props.text}
      </div>
    </div>
  );
};
