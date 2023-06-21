import React from "react";
import classes from '../pageApp/App.module.css';
import facebok from '../../img/facebook-black.png';
import apple from '../../img/apple.png';
import google from '../../img/googl.png';

function AppModal() {
    return(
<div className={classes.wrapper}>
        <div className={classes.conteiner}>
            <div className={classes.block_reag}>
                <div className={classes.content_reg}>
                    <h2>SIGN IN</h2>
                    <div className={classes.contener_block}>
                        <div className={classes.img_block}><img src={facebok} alt="img"/></div>
                        <div className={classes.img_block}><img src={apple} alt="img"/></div>
                        <div className={classes.img_block}><img src={google} alt="img"/></div>
                    </div>
                    <p className={classes.or}>or</p>
                    <div className={classes.input_conteiner}>
                        <div className={classes.block_inp}>
                            <label for="name">Name</label>
                            <input className={classes.input} id="name" type="text" placeholder="Your full name"/>
                        </div>
                        <div className={classes.block_inp}>
                            <label for="pass">Password</label>
                            <input className={classes.input} id="pass" type="text" placeholder="Your password"/>
                        </div>
                    </div>
                    <div className={classes.sing_up}>
                        <a href="#" className={classes.link_sing}><span className={classes.text_link}>SIGN UP</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AppModal