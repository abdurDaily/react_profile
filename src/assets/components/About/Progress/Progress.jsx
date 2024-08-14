import React from 'react';
import './Progress.css';

const Progress = () => {
    return (
        <div>
              <div id="progress">
                <div className="container">
                <div className="row gy-5 ">

<div className="col-lg-6">
<label htmlFor="">HTML</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'85%' }}></div>
        </div>
    </div>
</div>


<div className="col-lg-6">
<label htmlFor="">CSS</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'60%' }}></div>
        </div>
    </div>
</div>

<div className="col-lg-6">
<label htmlFor="">BOOTSTRAP</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'80%' }}></div>
        </div>
    </div>
</div>


<div className="col-lg-6">
<label htmlFor="">JAVASCRIPT</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'50%' }}></div>
        </div>
    </div>
</div>

<div className="col-lg-6">
<label htmlFor="">JQUERY</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'60%' }}></div>
        </div>
    </div>
</div>


<div className="col-lg-6">
<label htmlFor="">REACTJS</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'40%' }}></div>
        </div>
    </div>
</div>


<div className="col-lg-6">
<label htmlFor="">PHP</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'50%' }}></div>
        </div>
    </div>
</div>


<div className="col-lg-6">
<label htmlFor="">LARAVEL</label>
    <div className="bar">
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width:'50%' }}></div>
        </div>
    </div>
</div>

</div>

<a className='seemore' href="#">See More</a>
                </div>
              </div>
        </div>
    );
};

export default Progress;