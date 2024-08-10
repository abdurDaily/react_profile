import React from 'react';
import './Content.css';
import Progress from '../Progress/Progress';
const Content = () => {
    return (
        <div>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h2>About Me</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione unde iste delectus veritatis recusandae, aspernatur cumque quidem! Animi voluptate, cum delectus nam quod porro voluptatum repudiandae! Voluptate magnam at ratione, explicabo eligendi voluptatum harum. Doloribus soluta aut adipisci veniam harum ducimus laboriosam nobis cum praesentium ad. Ducimus facilis commodi unde?</p>

                            <h5>What is my skill level?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit
                            nibh amet egestas tellus.</p>
                            
                            <div className="skills">
                                <Progress />
                            </div>


                            <a href="#">See More..</a>
                        </div>
                        <div className="col-xl-5">
                            <h1>IMAGE</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;