import React from 'react';
import {shallow, mount} from 'enzyme';

import {PostedSection} from './postedsection';

const dummyFunction = () =>{}
 let items = [
 	{
 				title: "Test Title",
 				type: "image",
 				youTubeUrl: "https://i.gifer.com/NM9x.gif",
 				url: "https://i.gifer.com/NM9x.gif",
 				author: "New Author",
 				comments: []
 			}
 			]

describe('<PostedSection />', () => {
  it('Renders without crashing', () => {
    shallow(<PostedSection dispatch={dummyFunction} items={items}/>);
  });
});












// import React from 'react';
// import {shallow} from 'enzyme';

// import {PostedSection} from './postedsection';

// // Mock the async fetchBoard action
// const mockfetchProtectedDataAction = {
//     type: 'FETCH_ITEM'
// };
// jest.mock('../actions', () => Object.assign({},
//     require.requireActual('../actions/protected'),
//     {
//         fetchProtectedData: jest.fn().mockImplementation(() => {
//             return mockfetchProtectedDataAction;
//         })
//     }
// ));

// describe('<PostedSection/>', () => {

//     it('Renders without crashing', () => {
//         const dispatch = jest.fn();
//         shallow(<PostedSection dispatch={dispatch} />);
//     });

//     // it('Dispatches fetchBoard on mount', () => {
//     //     const dispatch = jest.fn();
//     //     shallow(<Board title="Foo" lists={[]} dispatch={dispatch} />);
//     //     expect(dispatch).toHaveBeenCalledWith(mockFetchBoardAction);
//     // });

// });



