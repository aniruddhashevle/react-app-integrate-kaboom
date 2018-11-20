import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleDataRequestForSearch } from '../../redux/actions/sample-action';
import {
    List,
    Textfield,
    ListItem,
    ListItemContent,
    Snackbar,
    Button,
    Chip
} from 'react-mdl';
import './search-data.scss';

class SearchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            noOfRecordsSearched: 0,
            showRecords: false,
            renderRecords: null,
            offset: 0,
            isSnackbarActive: false
        }
        this.searchedRecords = null;
        this.noOfRecordsToShow = 10;
    }

    componentDidMount = () => {
        this.props.sampleDataRequestForSearch();
    }

    onSeachChange = (e, sampleData) => {
        const {
            value
        } = e.target;
        this.setState({ searchValue: value });
        if (!value) return this.setState({ renderRecords: this.renderSearchableData(null) });
        let searchedRecords = null;
        if (sampleData) {
            searchedRecords = sampleData.filter(({ name, age, address, tags, email }) => {
                let searchableData = [
                    age.toString(),
                    email.toString(),
                    ...Object.values(name).toString().split(','),
                    ...Object.values(address).toString().split(','),
                    ...Object.values(tags).toString().split(','),
                ]
                return searchableData.find(subItem => subItem.toLowerCase().indexOf(value.toLowerCase()) > -1);
            });
        }
        this.setState({ searchedRecords, renderRecords: this.renderSearchableData(searchedRecords), isSnackbarActive: true });
    }

    renderSearchableData = (sampleData) =>
        sampleData &&
        sampleData.map(({ _id, name, age, address, tags, email }) =>
            <ListItem threeLine key={_id}>
                <ListItemContent avatar="person" subtitle={'Address : ' + Object.values(address).toString()}>
                    Name: {name.first + name.first}
                    <span className="sub-content">Age: {age}</span>
                    <span className="sub-content">email: {email}</span>
                    <span className="sub-content">Tags: {Object.values(tags).toString()}</span>
                </ListItemContent>
            </ListItem>
        )


    render() {
        const {
            sampleData
        } = this.props;
        const {
            isSnackbarActive,
            searchedRecords,
            showRecords,
            renderRecords
        } = this.state,
            recordsToBeShown = (renderRecords || []).slice(0, this.state.offset * this.noOfRecordsToShow);
        return (
            <div className="search-list-wrapper">
                <h3>Please Search The Records</h3>
                <Textfield
                    value={this.state.searchValue}
                    onChange={e => this.onSeachChange(e, sampleData)}
                    label="Search"
                    expandable
                    expandableIcon="search"
                    className="search-field"
                />
                {
                    searchedRecords && renderRecords &&
                    <Chip className="no-of-records">Records Searched: {searchedRecords.length}</Chip>
                }
                {
                    <Snackbar
                        active={(isSnackbarActive && showRecords && renderRecords) ? true : false}
                        onTimeout={_ => this.setState({ isSnackbarActive: false })}>
                        Scroll Dow To View More Records
                    </Snackbar>
                }
                {
                    showRecords && renderRecords &&
                    <List>{recordsToBeShown}</List>
                }
                {
                    renderRecords && recordsToBeShown && recordsToBeShown.length !== renderRecords.length &&
                    <Button
                        className="view-records-option"
                        onClick={(_) => this.setState({ showRecords: true, offset: (this.state.offset + 1) })}
                        raised colored
                    >
                        View More Records
                    </Button>
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {
        rootReducer: {
            searchDataReducer: {
                sampleData
            }
        }
    } = reduxState;

    return {
        sampleData
    }
}

export default connect(
    mapStateToProps,
    {
        sampleDataRequestForSearch
    }
)(SearchData);