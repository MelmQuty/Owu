import React from 'react';
import './section.css'


export const SectionInfo = (props) => {
    return (
      <div class={"SectionInfo"}>
            <h2>{props.title}</h2>
            <p>
                {props.info}
            </p>
      </div>
    );
};