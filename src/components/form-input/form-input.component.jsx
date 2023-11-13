import './form-input.styles.scss'
//to geve all to the props of the component just use ...otherProps same to the input inside
const FormInput = ({ label, ...otherProps }) => {

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
    </div>
  )
}

export default FormInput