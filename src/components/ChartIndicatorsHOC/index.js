import React, { Fragment } from 'react';
import {
    List,
    ListItem
} from 'react-mdl';
import './chart-indicator-hoc.scss';

const ChartIndicatorsHOC = (Component) => () =>
    <Fragment>
        <Component />
        <div className="indicators">
            <h4 className="chart-indicator-heading">Indicators for the Chart</h4>
            <List>
                <ListItem><span className="indicator-box open-box"></span>Open Price</ListItem>
                <ListItem><span className="indicator-box high-box"></span>High Price</ListItem>
                <ListItem><span className="indicator-box low-box"></span>Low Price</ListItem>
                <ListItem><span className="indicator-box close-box"></span>Close Price</ListItem>
            </List>
        </div>
    </Fragment>

export default ChartIndicatorsHOC;