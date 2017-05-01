import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import actions from '../src/scripts/actions/actions';
import api from '../src/scripts/api/api';

describe('action test',()=>{
    it("it should return an object from api", function(){
        expect(actions).to.exist
    })
}) 