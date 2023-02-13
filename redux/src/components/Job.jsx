import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../redux/actions'

const Job = ({ data }) => {
  const favourite = useSelector((state) => state.favourite) || []
  const dispatch = useDispatch()

  const isFav = favourite && favourite.includes(data.company_name)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch(removeFromFavorites(data))
            }
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch(addToFavorites(data))
            }
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job