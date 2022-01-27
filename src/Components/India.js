import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Statedata from './Statedata';

import axios from 'axios';

export default class India extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                countryInfo:{
                    
                }
            }
        }
    }

    componentDidMount() {

        axios.get('https://corona.lmao.ninja/v2/countries/india')
            .then((response) => {
                // handle success
                this.setState({
                    data: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }

    render() {
        return (

            <div className='row mt-2'>
                <div className='col-md-12'>
                    <img width={150} src={this.state.data.countryInfo.flag} alt="" />
                    <h3>INDIA</h3>

                </div>

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <Card className='badge bg-primary' style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 mb-3">
                            <Card className='badge bg-warning' style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.data.active}</h3>
                                    {/* <Card.Text className='text-wrap'>
                                        [Today : {this.state.data.cases}]
                                    </Card.Text> */}

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 mb-3">
                            <Card className='badge bg-success' style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                   

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 mb-3">
                            <Card className='badge bg-danger' style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>TOTAL DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mb-5">

                    <Statedata />
                </div>




            </div>
        )
    }


}

