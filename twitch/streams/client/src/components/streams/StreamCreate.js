import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    renderInput = (formProps) => {
        console.log("🚀 ~ file: StreamCreate.js:6 ~ StreamCreate ~ props:", formProps)
        return < input {...formProps.input} />;
    }
    render() {
        return (
            <form>
                <Field name='title' component={this.renderInput} />
                <Field name='description' component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
