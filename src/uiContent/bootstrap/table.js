import React from 'react';
import Table from 'react-bootstrap/Table';

function Bstable(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.title}</td>
          <td >{props.desc}</td>
          <td><img src={props.img} alt='img' style={{height:"50px",width:"50px"}}/></td>
          <td>{props.cat}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Bstable;