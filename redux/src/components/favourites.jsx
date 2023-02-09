import {Col, Row, Button} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'

export const favourites = () => {

    let favourites = useSelector((state) =>state.favourites.content)
    const dispatch = useDispatch();

    return(
        <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {favourites.map((favourite, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAVOURITES',
                    payload: i,
                  })
                }}
              >
                Remove From Favourites
              </Button>
              {favourite.title}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
    )
}