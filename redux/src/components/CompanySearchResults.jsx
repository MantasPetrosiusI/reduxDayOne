import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { getJobsActionAsync } from '../redux/actions'

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  useEffect(() => {
    getJobsActionAsync(baseEndpoint, params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  


  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
