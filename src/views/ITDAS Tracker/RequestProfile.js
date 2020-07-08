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
            <CardHeader>
            <strong>REQUEST PROFILE</strong>
                    {/* <small> Form</small> */}
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs='3'>
                <strong>Reference #</strong>
                <Input type="text" id="reference"name="reference"/>
                <strong>Ext Ref # (IRIS No/Proj No)</strong>
                <Input type="text" id="irisnoprojno"name="irisnoprojno"/>
                <strong>Category</strong>
                <Input type="select" name="category" id="categorybe">
                        <option value="">Please select</option>
                        <option value="BE">BE</option>
                        <option value="Non-BE">Non-BE</option>
                        <option value="MVP">MVP</option>
                </Input>
                <strong>Type</strong>
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
                <strong>AOP</strong>
                <Input type="select" name="aop" id="aop">
                        <option value="">Please select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>       
                </Input>
                <strong>Ana Plan No/Ref. No</strong>
                <Input type="text" id="anaplanno"name="anaplanno"/>
                </Col>

                <Col xs='3'>
                <strong>Plan PBE No</strong>
                <Input type="text" id="planpbeno"name="planpbeno"/>             
                <strong>Plan PBE Date/RFS Date</strong>
                <Input type="date" id="planpbedate"name="planpbedate"/>
                <strong>Actual PBE No</strong>
                <Input type="text" id="actualpbeno"name="actualpbeno"/>
                <strong>Actual PBE Date/RFS Date</strong>
                <Input type="date" id="actualpbedate"name="actualpbedate"/>
                <strong>Quarterly Plan RFS Date</strong>
                <Input type="select" name="select" id="select">
                        <option value="">Please select</option>
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>                     
                </Input>
                </Col>

                <Col xs='3'>
                <strong >Name/Description</strong>
                <Input type="textarea" id="description"name="description"/>
                <strong >Remarks/Benefit</strong>
                <Input type="textarea" id="latestremark"name="latestremark"/>
                <strong>System</strong>
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
                <strong>System/Ref/Project/Initiative Name</strong>
                <Input type="text" id="initiativename"name="initiativename"/>
                <strong>Status</strong>
                <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="SIT">SIT</option>
                        <option value="UAT">UAT</option>
                        <option value="Regression">Regression</option>
                        <option value="PT">PT</option>
                        <option value="Pre Prod">Pre Prod</option>
                </Input>
                <strong>Status Description</strong>
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
  <Col xs='2'><strong>Latest Remark/Update</strong></Col>
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
