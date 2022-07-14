
function Button({text,color,padding,backgroundColor,type, onClickHandler,disabled}) {
  onClickHandler = onClickHandler ? onClickHandler : undefined;
  disabled = disabled !== undefined ? disabled : false
  return <button type={type} style={{
      color,
      padding,
      backgroundColor,
      marginRight:'10px',
      border:'none'
    }}
    onClick={onClickHandler}
    disabled={disabled}
    >
      {text}
    </button>
}

export default Button;