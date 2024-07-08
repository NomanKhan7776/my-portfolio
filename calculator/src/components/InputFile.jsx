import styles from "./InputFile.module.css";

function InputField({value}) {
  return <input value={value} className={styles.input} type="text" readOnly />;
}

export default InputField;
