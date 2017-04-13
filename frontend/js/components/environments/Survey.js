'use strict';

import React, { PropTypes, Component } from 'react';
import SurveyCard from './../ecosystems/SurveyCard';

class Survey extends Component {
    render() {
        return (
            <article>
                <pre>Survey Page</pre>
                <SurveyCard />
            </article>
        );
    }
}

Survey.propTypes = {};

module.exports = Survey;
