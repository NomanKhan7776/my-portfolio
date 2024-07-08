import styles from './Buttons.module.css'

function Btns({ btn,inputNum }) {
  return (
    <div className={styles.display}>
      {btn.map((bt,i) => {
        
        return  <button onClick={()=>inputNum(bt)} className={styles.btns} key={i}>{bt}</button>
        
      })}
    </div>
  );
}
export default Btns;
