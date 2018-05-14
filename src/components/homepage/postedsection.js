import React from 'react';

import FlexImage from './fleximage';
import FlexVideo from './flexvideo';

export default function PostedSection (props) {
    return (
      <section className="postedSection">
        <div className="flexContainer">
        	<FlexImage />
        	<FlexVideo />
        </div>
      </section>
    );
}