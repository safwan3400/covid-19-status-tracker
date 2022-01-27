import axios from 'axios';
import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';

export default class Statedata extends Component {
    constructor() {
        super()
        this.state = {
            stateData: {

            }
        }
    }

    componentDidMount() {

        axios.get('https://data.covid19india.org/state_district_wise.json')
            .then((response) => {
                // handle success
                this.setState({
                    stateData: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }
    render() {
        let keys = Object.keys(this.state.stateData).slice(1)

        return <div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <Accordion>

                        {
                            keys.map((itm, k) => {

                                let districts = this.state.stateData[itm].districtData
                                console.log(districts);

                                let district_list = []

                                let total_active = 0
                                // let total_confirmed = 0
                                // let total_deaths = 0
                                // let total_recover = 0

                                for (const x in districts) {

                                    total_active += districts[x].active
                                    // total_confirmed += districts[x].confirmed
                                    // total_deaths += districts[x].deceased
                                    // total_recover += districts[x].recovered
                                    let obj = {
                                        name: x,
                                        data: districts[x]

                                    }
                                    district_list.push(obj)
                                }

                                console.log(district_list);
                                return (

                                    <Accordion.Item eventKey={k} key={k}>
                                        <Accordion.Header>
                                            <div className="d-flex justify-content-between">
                                                <span>{itm}</span>
                                                <span className="ms-3 btn btn-dark">
                                                    Total cases: {total_active}
                                                </span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <table className='table table-bordered table-striped'>
                                                <thead>
                                                    <tr>
                                                        <td>District</td>
                                                        <td>Confirmed</td>
                                                        <td>Active</td>
                                                        <td>Recovered</td>
                                                        <td>Deaths</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        district_list.map((dis, key) => {

                                                            return (
                                                                < tr key={key} >

                                                                    <td>{dis.name}</td>
                                                                    <td>{dis.data.confirmed}</td>
                                                                    <td>{dis.data.active}</td>
                                                                    <td>{dis.data.recovered}</td>
                                                                    <td>{dis.data.deceased}</td>


                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }

                            )
                        }
                    </Accordion>

                </div>
            </div>
        </div >;
    }
}
