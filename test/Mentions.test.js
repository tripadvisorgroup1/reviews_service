import React from 'react';
import { shallow } from 'enzyme';
import Mentions from '../client/src/Mentions';
import Word from '../client/src/Word'

describe('Mentions Module Tests', () => {
   it('should pass in mentions array', () => {
      const wrapper = shallow(<Mentions />);
      expect(wrapper).toHaveProp('mentions');
    });

    it('should handle click event', () => {
      const wrapper = shallow(<Mentions />);
      expect(wrapper).toHaveProp('filterMentions');

      const component = shallow(<Word onClick={filterMention} />);

      component
      .find('button')
      .simulate('click');

      expect(filterMentions).toHaveBeenCalled();
    });

});
