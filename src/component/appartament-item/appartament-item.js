import React from 'react';
import './appartament-item.css';

export const AppartamentItem = ({ flat }) => {
  return (
    <div className='appartament-item'>
        <div className='appartament-item__details'>
            <span className='appartament-item__title'>{flat.title}</span>
            <div className='appartament-item__district'>
                {
                    flat.district.map(district => district)
                }
            </div>
            <div className='appartament-item__call'>Call</div>
        </div>
    </div>
  )
}
