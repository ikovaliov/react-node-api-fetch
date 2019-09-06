import React from 'react';
import PropTypes from 'prop-types';

const SingleItem = ({ item }) => {
  return (
    <tr>
      <td>{item.owner}</td>
      <td>
        {item.address.line1 ? <p>{item.address.line1}</p> : ''}
        {item.address.line2 ? <p>{item.address.line2}</p> : ''}
        {item.address.line3 ? <p>{item.address.line3}</p> : ''}
        {item.address.line4 ? <p>{item.address.line4}</p> : ''}

        {item.address.postCode ? <p>{item.address.postCode}</p> : ''}
        {item.address.city ? <p>{item.address.city}</p> : ''}
        {item.address.country ? <p>{item.address.country}</p> : ''}
      </td>
      <td>{item.incomeGenerated}£</td>
    </tr>
  );
};

SingleItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SingleItem;
