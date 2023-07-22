import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

    renderError = ({ error, touched }) => {
        console.log("🚀 ~ file: StreamCreate.js:7 ~ StreamCreate ~ touched:", touched)
        console.log("🚀 ~ file: StreamCreate.js:7 ~ StreamCreate ~ error:", error)
        if (error && touched) {
            return (
                <div className="ui error message" >
                    <div className="header" >
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error ' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log("🚀 ~ file: StreamCreate.js:16 ~ StreamCreate ~ formValues:", formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name='title' component={this.renderInput} label="Enter Title" />
                <Field name='description' component={this.renderInput} label="Enter Description" />
                <button className=" ui button primary" >Submit</button>
            </form>
        )
    }
}


const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'you must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'you must enter a description';
    }

    return errors;
}


export default reduxForm({
    form: 'streamCreate',
    validate: validateForm,
})(StreamCreate);
