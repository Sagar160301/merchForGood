import "./input.scss";
export const Input = ({ name, type, onChange }) => {
  return (
    <div className="input-field">
      <div>{name}</div>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
};
