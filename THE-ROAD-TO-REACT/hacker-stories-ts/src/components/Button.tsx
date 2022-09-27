interface ButtonProps {
  /**  Text label that will be visible on the button. */
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <label>
      <button>{props.label}</button>
    </label>
  );
};

export default Button;
