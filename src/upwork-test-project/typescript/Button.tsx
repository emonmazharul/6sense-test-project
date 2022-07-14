interface Props {
  text:string;
  color:string;
  backgroundColor:string;
  padding:string;
  type:'button' | 'submit';
  disabled?: boolean
  onClickHandler?: ()=> void;
}

const Button:React.FC<Props> = ({text,color,padding,backgroundColor,type, onClickHandler,disabled}) => {
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