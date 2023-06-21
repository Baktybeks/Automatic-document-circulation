import React from 'react'
import classes from "./about.module.css"
import bi from "../../img/bilain.png"

function About() {
    return (
        <section className={classes.container_about_company}>
            <div className={classes.company_content}>
                <div className={classes.head_about}>
                    <h2>О компании</h2>
                </div>
                <div className={classes.block_info}>
                    <div className={classes.img_company}>
                        <img src={bi} alt="car"/>
                    </div>
                    <div className={classes.text_company}>
                        <p>
                            Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных
                            услуг: Интернет, телефония, IP телевидение, видеонаблюдение.
                        </p>
                        <p>
                            Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в
                            информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего
                            качества.

                        </p>
                    </div>
                </div>
                <div className={classes.btn_company}>
                    <a href="#"><span>Подробно о компании</span></a>
                </div>
            </div>
        </section>
    )
}

export default About