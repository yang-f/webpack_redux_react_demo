jest.unmock('../../app/components/productBox'); 

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ProductBox from '../../app/components/productBox';

describe('ProductBox', () => {
  it('ProductBox test', () => {
    const productBox = TestUtils.renderIntoDocument(
      <ProductBox />
    );
    const productBoxNode = ReactDOM.findDOMNode(productBox);
    expect(productBoxNode.textContent).toEqual('hello!');
  });
});