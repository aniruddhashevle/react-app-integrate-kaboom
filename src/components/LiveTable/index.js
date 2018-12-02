import React, { Component, Fragment } from 'react';
import { mountSocket, unmountSocket } from '../../utils/socket-io-utils';
import ReactTable from "react-table";
import "react-table/react-table.css";

class LiveTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: [],
            pageSize: 10
        }
        this.clientSocket = null;
        this.tableColumns = [
            {
                Header: 'Open Prices',
                accessor: 'open_value'
            },
            {
                Header: 'High Prices',
                accessor: 'high_value'
            },
            {
                Header: 'Low Prices',
                accessor: 'low_value'
            },
            {
                Header: 'Close Prices',
                accessor: 'close_value'
            },
            {
                Header: 'Timestamp',
                accessor: 'timestamp'
            }
        ];
    }

    componentDidMount = () => {
        //initiate the socket and after getting live OHLC data, this component's state's options is set
        mountSocket({ context: this, getTableConfig: true });
    }

    componentWillUnmount = () => {
        unmountSocket(this);
    }

    render() {
        return (
            <Fragment>
                <h3>Live Data</h3>
                <ReactTable
                    {...this.state.config}
                    columns={this.tableColumns}
                    pageSize={this.state.pageSize}
                    onPageSizeChange={pageSize => this.setState({ pageSize })}
                    className={"-striped -highlight"}
                />
            </Fragment>
        );
    }
}

export default LiveTable;