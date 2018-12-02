import React, { Component } from 'react';
import { connect } from 'react-redux';
import CanvasJSChart from '../../utils/libraries/canvasjs.react';
import { createChartConfig } from '../../utils/charts-utilis';
import { historicalDataRequest } from '../../redux/actions/kaboom-actions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChartIndicatorsHOC from '../ChartIndicatorsHOC';
import './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {},
            interval: 1,
        }
    }

    componentDidMount = () => {
        this.callHistoricalAPI();
    }

    callHistoricalAPI = async () => {
        console.log('this.props.', this.props);
        let data = await this.props.historicalDataRequest(this.state.interval);
        if (data && data.length > 0) {
            let options = createChartConfig(data);
            await this.setState({ options });
        }
    }

    onIntervalChange = async event => {
        await this.setState({ interval: event.target.value });
        this.callHistoricalAPI();
    };


    render() {
        return (
            <div className="home-wrapper">
                <h3>Historical Data</h3>
                <FormControl>
                    <InputLabel htmlFor="interval-simple">Intervals</InputLabel>
                    <Select
                        value={this.state.interval}
                        onChange={this.onIntervalChange}
                        inputProps={{
                            name: 'interval',
                            id: 'interval-simple',
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                    </Select>
                </FormControl>
                <CanvasJSChart options={this.state.options} />
            </div>
        )
    }
}

export default ChartIndicatorsHOC(connect(
    null,
    {
        historicalDataRequest
    }
)(Home));