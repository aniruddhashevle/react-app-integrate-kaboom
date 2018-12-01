import React from 'react';
import {
    List,
    ListItem
} from 'react-mdl';
import './chart-indicator.scss';

const ChartIndicators = () =>
    <div className="indicators">
        <h4 className="chart-indicator-heading">Indicators for the Char</h4>
        <List>
            <ListItem><span className="indicator-box open-box"></span>Open Price</ListItem>
            <ListItem><span className="indicator-box high-box"></span>High Price</ListItem>
            <ListItem><span className="indicator-box low-box"></span>Low Price</ListItem>
            <ListItem><span className="indicator-box close-box"></span>Close Price</ListItem>
        </List>
    </div>

export default ChartIndicators;