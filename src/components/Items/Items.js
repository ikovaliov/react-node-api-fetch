import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
import { PropTypes } from 'prop-types';
import { getItems } from '../../redux/actions/itemActions';

class ItemsList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {
      item: { items, loading }
    } = this.props;

    if (loading || items === null) {
      return <p>Loading, please wait...</p>;
    }
    return (
      <div className='item-list'>
        <table class='table'>
          <thead>
            <tr>
              <th scope='col'>Owner</th>
              <th scope='col'>Address</th>
              <th scope='col'>IncomeGenerated</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return <SingleItem item={item} key={item.airbnbId} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ItemsList.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    item: state.item
  };
};

export default connect(
  mapStateToProps,
  { getItems }
)(ItemsList);
