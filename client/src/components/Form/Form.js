import React from 'react';
import './Form.css';

const Form = props => (
    <div className="container">
        <p className="text-center bg-info">Find Articles</p>
        <form>

            <div className="form-group">
                <label htmlFor="topic">Topic:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.topic}
                    name="topic"
                    type="text"
                    className="form-control"
                    placeholder="Topic"
                    id="topic"
                />
                <label htmlFor="startYear">Start Year:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.startYear}
                    name="startYear"
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    id="startYear"
                />
                <label htmlFor="endYear">End Year:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.endYear}
                    name="endYear"
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    id="endYear"
                />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-info mt-3"
                >
                    Search
            </button>
            </div>
        </form>
    </div>
);


export default Form;