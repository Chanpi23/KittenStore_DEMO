<<<<<<< HEAD
import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store(){
  return (
  <>
  <h1>Store</h1>
  <Row md={2} xs={1} lg={3} className="g-3">
    {storeItems.map(item => (
      <Col>
        <StoreItem {...item} />
      </Col>
    ))}
  </Row>
  </>
  )
=======
export function Store(){
  return <h1>Store</h1>
>>>>>>> 69afa614c587d29d1361bc7ba368488ffb7ee6f8
}