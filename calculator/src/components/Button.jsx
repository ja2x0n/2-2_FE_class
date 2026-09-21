import "./Button.css";
const Button = ({ text = "", type = "number", onClick = () => {} }) => {
    const buttonType = ["operator", "action"].find((it) => it === type)
        ? type
        : "number";
    return (
        <button className={`button button_${buttonType}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
