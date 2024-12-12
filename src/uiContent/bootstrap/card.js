import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props){
    return(
        <>
         <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={props.img} style={{height:"150px"}}/>
      <Card.Title>{props.title}</Card.Title>
      <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
        
        <Card.Text>
          {props.desc}
        </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"> <Button variant="primary">{props.info}</Button></Card.Footer>
      
    </Card>
        </>

    )
}
export default Cards;