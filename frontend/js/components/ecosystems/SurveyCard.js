'use strict';

import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';
const Rating = require('react-rating');

class SurveyCard extends Component {
    render() {
        return (
            <Card>
                <pre>Survey Card</pre>
                <Rating initialRate={3}/>
            </Card>
        );
    }
}

SurveyCard.propTypes = {};

module.exports = SurveyCard;
