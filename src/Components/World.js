import React, { Component } from 'react';
import axios from 'axios';


export default class World extends Component {
    constructor() {
        super()
        this.state = {
            worldData: []
        }
    }
    componentDidMount() {

        axios.get('https://corona.lmao.ninja/v2/countries')
            .then((response) => {
                // handle success
                console.log(response.data);
                this.setState({
                    worldData: response.data
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }
    render() {
        return <div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.worldData.map((data, k) => {
                                    return <tr key={k}>
                                        <td className='d-flex justify-content-between'>
                                            <span>{data.country}</span>
                                            <img width={50} src={data.countryInfo.flag} alt="" />
                                        </td>
                                        <td>{data.cases}</td>
                                        <td>{data.recovered}</td>
                                        <td>{data.deaths}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
    }
}
