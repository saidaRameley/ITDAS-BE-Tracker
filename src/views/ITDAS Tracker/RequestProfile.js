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
                <Col xs='3'>
                <Label>Reference #</Label>
                <Input type="text" id="reference"name="reference"/>
                <Label>Ext Ref # (IRIS No/Proj No)</Label>
                <Input type="text" id="irisnoprojno"name="irisnoprojno"/>
                <Label >Category</Label>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="BE">BE</option>
                        <option value="Non-BE">Non-BE</option>
                        <option value="MVP">MVP</option>
                </Input>
                <Label>Type</Label>
                <Input type="select" name="type" id="type">
                        <option value="">Please select</option>
                        <option value="product">Product</option>
                        <option value="non-product">Non-Product</option>    
                </Input>
                <Label>Agile</Label>
                <Input type="select" name="agile" id="agile">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>             
                </Input>
                <Label>AOP</Label>
                <Input type="select" name="aop" id="aop">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>       
                </Input>
                <Label>Ana Plan No/Ref. No</Label>
                <Input type="text" id="anaplanno"name="anaplanno"/>
                </Col>

                <Col xs='3'>
                <Label>Plan PBE No</Label>
                <Input type="text" id="planpbeno"name="planpbeno"/>             
                <Label>Plan PBE Date/RFS Date</Label>
                <Input type="date" id="planpbedate"name="planpbedate"/>
                <Label>Actual PBE No</Label>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                <Label>Actual PBE Date/RFS Date</Label>
                <Input type="date" id="actualpbedate"name="actualpbedate"/>
                <Label>Quarterly Plan RFS Date</Label>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>                     
                </Input>
                </Col>

                <Col xs='3'>
                <Label >Name/Description</Label>
                <Input type="textarea" id="description"name="description"/>
                <Label >Remarks/Benefit</Label>
                <Input type="textarea" id="latestremark"name="latestremark"/>
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
                <Col xs='3'>
                <Label>System/Ref/Project/Initiative Name</Label>
                <Input type="text" id="initiativename"name="initiativename"/>
                <Label>Status</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="SIT">SIT</option>
                        <option value="UAT">UAT</option>
                        <option value="Regression">Regression</option>
                        <option value="PT">PT</option>
                        <option value="Pre Prod">Pre Prod</option>
                </Input>
                <Label>Status Description</Label>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="SIT">SIT</option>
                        <option value="UAT">UAT</option>
                        <option value="Regression">Regression</option>
                        <option value="PT">PT</option>
                        <option value="Pre Prod">Pre Prod</option>
                </Input>
                </Col> 
              </Row>
            </CardBody>
        
                <Col xs='2' style={{marginLeft: '1100px', marginTop: '25px'}}>
                                <Button block color="primary"> Add Remark</Button>
                </Col>
  <Col xs='2'><Label>Latest Remark/Update</Label></Col>
  <Col xs='12'>
    <table class="table table-bordered table-striped table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Update By</th>
      <th scope="col">Type</th>
      <th scope="col">Status Date</th>
      <th scope="col">Update Date</th>
      <th scope="col">Remarks</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</Col>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default requestProfile;
