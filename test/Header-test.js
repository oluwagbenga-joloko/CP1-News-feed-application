import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../src/scripts/components/header';

describe("test for header component", function() {
  it("should contain a nav component", function() {
    expect(shallow(<Header />).contains(<nav/>)).to.exist;
  });
  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Header>
        <div className="unique" >hi</div>
      </Header>
    );
    expect(wrapper.contains(<div className="unique" >hi</div>)).to.equal(true);
  });
});
