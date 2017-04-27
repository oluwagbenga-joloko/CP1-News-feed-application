import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../src/scripts/components/header';

describe("test for header component", function() {
  it("should contain a nav component", function() {
    expect(shallow(<Header />).contains(<nav/>)).to.exist;
  });
});
