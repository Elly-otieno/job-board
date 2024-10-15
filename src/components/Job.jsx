import React from 'react'
import location from '../assets/images/location.svg'
import dollar from '../assets/images/dollar.svg'


function Job(props) {
    // console.log(props);
    
  return (
    <div className='job'>
        <div className="job-detail">
            <div className="job-icon">
                <img src={props.icon} alt="icon" className='icon'/>
            </div>
            <div className="job-company">
                <h2>{props.job}</h2>
                <p>{props.company}</p>
            </div>
        </div>
        <div className="job-detail job-specifics">
            <p className='job-spec'>
                <img src={location} alt="location" />
                {props.location}
            </p>
            <p className='job-spec'>
                <img src={dollar} alt="pricing" />
                ${props.salaryRange.min}k - ${props.salaryRange.max}k
            </p>
            <p className='job-spec'>
                {props.jobRole}
            </p>
        </div>
        <div className="job-detail">
            <div className="stats">
                <p className="applicants">{props.stats.applicants} applicants</p>
                <p className="time">{props.stats.timeElapsed} hours ago</p>
            </div>
            <button className="btn">More Details</button>
        </div>
    </div>
  )
}

export default Job