import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Rack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
          <Row>
              <Col xs='12'>
              <Card>
                  <CardHeader>Rack</CardHeader>
                  <CardBody>
                    <Row style={{marginLeft: '250px'}}>
                        <Col xs='4' >
                            <FormGroup>
                                <Label>DC Site</Label>
                                <Input type="select" name="select" id="select">
                                    <option value="0">Please select</option>
                                    <option value="CBJ8">CBJ 8</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </Input>
                                <Label>DC Location</Label>
                                <Input type="select" name="select" id="select">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs='4'>
                        <Label>Level</Label>
                        <Input type="text" id="level" name="level" />        
                        </Col>
                    </Row>
                    <Card>
                    <CardBody>
                    <Row>
                        <Col xs='3'>
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />        
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        </Col>
                        <Col xs='3'>
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        </Col>  
                        <Col xs='3'>
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        </Col>
                        <Col xs='3'>
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        <Label>Rack ID</Label>
                        <Input type="text" id="rackId" name="rackId" />  
                        </Col>   
                    </Row>
                    </CardBody>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button block outline color="primary">Submit</Button>
                    </Col>
                    </Card>
                  </CardBody>
              </Card>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Rack;
