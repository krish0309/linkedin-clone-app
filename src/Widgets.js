import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

function Widgets() {

    const newArticle = (heading,subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    );
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newArticle("Lets gets a job","Top read - 9999 readers")}
    </div>

  )
}

export default Widgets;