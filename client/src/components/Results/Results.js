import React, { Component } from 'react';
import Form from '../Form';
import ResultList from './ResultList';
import API from "../../utils/API";
import moment from 'moment';
import './Results.css';

class Results extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        results: []
    };


    componentDidMount() {
        this.searchNYT("", "2018", "2018");
    }


    searchNYT = (topic, startYear, endYear) => {
        API.search(topic, startYear, endYear)
            .then(res => this.setState({ results: res.data.response.docs }))
            .then(res => console.log(this.state.results))

            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchNYT(this.state.topic, this.state.startYear, this.state.endYear);
    };

    render() {
        const headlines = this.state.results.map(function (item, i) {
           const prettyDate = moment(item.pub_date).format('MM/DD/YYYY'); 
            return (
                <tr>
            <td>{prettyDate}</td>
            <td><a href={item.web_url} target="_blank"> {item.headline.main}</a></td>
                <td><button id={item._id}>Save</button></td>
                </tr>
            )     
        })

        return (


            <div className="container">
                <Form
                    topic={this.state.topic}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <p id="searchResultsHeader" className="text-center bg-info">Top Search Results</p>
                <ResultList headline={[headlines]} />

            </div>
        )
    }
};


export default Results;