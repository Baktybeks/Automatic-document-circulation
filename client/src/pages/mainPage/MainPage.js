import React from 'react';
import circle from '../../img/circle.png';
import photo from '../../img/photo.png';
import classes from './Main.module.css';


function MainPage() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <div className={classes.block_content}>
                    <div className={classes.content}>
                        <div className={classes.block_rockets}>
                            <div className={classes.black_img_block}>
                                <div className={classes.black_block}>
                                    <h3>Work with the Rockets</h3>
                                    <p>
                                        Wealth creation is an evolutionarily recent positive_sum game.
                                        It is all about who take the opportunity first.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.active_useers}>
                            <h2>Purity UO Dashboard</h2>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Nulla hendrerit nam vitae orci purus tincidunt ut orci eget. In in lobortis mattis sit libero netus sit enim. Donec quis mi non natoque id blandit nisl urna metus. Morbi lobortis porta dignissim augue mattis tincidunt leo.
                                </p>
                                <p>
                                    Tortor aliquam nunc nibh et quam quam elementum donec. Pulvinar viverra sit tincidunt urna proin sagittis rutrum at nulla. Mattis tincidunt blandit proin felis. Nec consectetur sed adipiscing magna maecenas facilisi urna a feugiat. Aenean gravida vehicula at eu nunc iaculis ut blandit ut. Suspendisse dignissim urna potenti proin elementum morbi vitae feugiat.
                                </p>
                                <p>
                                    Tortor arcu auctor aliquam gravida quis morbi mattis. Euismod leo neque non aliquam. Elementum ultrices eget pretium purus egestas suspendisse quam enim gravida. Faucibus interdum pellentesque felis sed. Iaculis elementum nec ac massa netus duis. Mauris dolor eu sed risus vitae
                                </p>
                            </div>
                        </div>
                        <div className={classes.block_progect}>
                            <div className={classes.head_progect}>
                                <h3>Projects</h3>
                                <p><img src={circle} alt='circke' /><span>30 done</span>this month</p>
                            </div>
                            <div className={classes.block_table}>
                                <table className={classes.table}>
                                    <tr>
                                        <th>COMPANIES</th>
                                        <th>MEMBERS</th>
                                        <th>BUDGET</th>
                                        <th>COMPLETION</th>
                                    </tr>
                                    <tr>
                                        <td>Chakra Soft UI Version</td>
                                        <td><img src={photo} alt='photos'/></td>
                                        <td>$14,000</td>
                                        <td className={classes.num_prod}>
                                            <span>60%</span>
                                            <div className={classes.prog}>
                                                <div className={classes.line_prog}></div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MainPage
