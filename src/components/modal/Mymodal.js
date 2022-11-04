import React from 'react';
import classes from './Mymodal.module.css'
function Mymodal({children, modal, setModal}) {
    const modalClasses = [classes.MyModal]
    if(modal){
        modalClasses.push(classes.active)
    } 
    return (
        <div  className={modalClasses.join(' ')} onClick = {() => setModal(false)}>
                <div className={classes.MyModalContent} onClick = {(e) => e.stopPropagation()}>
                {children}
                </div>
        </div>
    );
}

export default Mymodal;