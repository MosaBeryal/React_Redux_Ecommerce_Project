import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container} from 'react-bootstrap';

function Error() {
  
    return (
      <Container style={{height:"280px", width:"500px", marginTop:"100px"}}>

      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          No page found
        </p>
      </Alert>
      </Container>
    );
    }


export default Error