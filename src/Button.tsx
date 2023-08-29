import {
  Button as MuiButton,
  ButtonProps,
  makeStyles
} from "@material-ui/core";

// interface IButtonProps extends ButtonProps {
//   customColor?: "small" | "medium" | "large";
// }

const useStyles = makeStyles({
  primary: {
    color: "#00AA00"
  },
  secondary: {
    color: "#0000FF"
  },
  third: {
    color: "#FF0000",
    backgroundColor: "#003300",
    fontWeight: "bold"
  }
});

function Button({ children, variant }) {
  const classes = useStyles();

  let buttonClassName = "";
  if (variant === "primary") {
    buttonClassName = classes.primary;
  } else if (variant === "secondary") {
    buttonClassName = classes.secondary;
  } else if (variant === "third") {
    buttonClassName = classes.third;
  }

  return <MuiButton className={buttonClassName}>{children}</MuiButton>;
}

export default Button;
