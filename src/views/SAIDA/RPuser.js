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

class requestProfile extends Component {
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
          <Col xs ='12'>
          <Card>
            <CardHeader>REQUEST PROFILE</CardHeader>
            <CardBody>
              <Row>
                <Col xs='2'>
                <Label>Reference #</Label>
                <Input type="text" id="reference"name="reference"/>
                <Label>Plan PBE No</Label>
                <Input type="text" id="planpbeno"name="planpbeno"/>
                <Label >Name/Description</Label>
                <Input type="textarea" id="descriptionid"name="description"/>
                <Label >Remarks/Benefit</Label>
                <Input type="textarea" id="benefitid"name="benefitid"/>
                <Label >System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="projectName"name="projectName"/>
                </Col>

                <Col xs='2'>
                <Label>Ext Ref #(IRIS No/Proj No)</Label>
                <Input type="select" name="system" id="system">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>                        
                </Input>

                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date" id="planpbedate"name="planpbedate"/>
                </Col>

                <Col xs='2'>
                <Label>Category</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                </Input>

                <Label>Actual PBE No</Label>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                </Col>

                <Col xs='2'>
                <Label>Type</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="T1">T1</option>
                        <option value="T2">T2</option>
                        <option value="T3">T3</option>
                        <option value="T4">T4</option>
                </Input>

                <Label>Actual PBE Date/RFS Date</Label>
                <Input type="date" id="actualpbedate"name="actualpbedate"/>
                </Col>

                <Col xs='2'>
                <Label>Agile</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>     
                </Input>

                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                </Input>

                <Label>System</Label>
                <Input type="select" name="systemcategory" id="systemcategory">
                        <option value="">Please select</option>
                        <option value="Build">Build</option>
                        <option value="Testing">Testing</option>
                        <option value="Deployed">Deployed</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="KIV">KIV</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Close">Close</option>                
                </Input>
                </Col> 

                <Col xs='2'>
                <Label>AOP</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                </Input>
                </Col>
              </Row>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default requestProfile;
