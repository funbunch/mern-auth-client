import { Link } from 'react-router-dom'

const JobList = (props) => {
    // console.log(props)
    // render each job from JobList.js
    const renderedJobs = props.jobData.map(job => {
        return(
            <li key={`${job.id}`}>
                <Link to={`/job/${job.id}`}>{job.title}</Link>
            </li>
        )
    })

    return(
        <div>
            <div className='header'>
                <h2>jobs cards</h2>
            </div>
            <ul className='list'>
                {renderedJobs}
            </ul>
        </div>
    )
}
export default JobList