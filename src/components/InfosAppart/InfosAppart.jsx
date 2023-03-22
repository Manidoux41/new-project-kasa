import React from 'react'
import Tag from '../Tag.jsx/Tag';

function InfosAppart({appart}) {
    console.log(appart);
  return (
    <div className='info'>
        <div className="left">
            <h3 className='titreAppart'>{appart.title}</h3>
            <p className="location">{appart.location}</p>
            <ul className="tags">
                {
                    appart.tags.map((tag, index) => (
                        <Tag key={index} tag={tag}/>
                    ))
                }
            </ul>
        </div>
        <div className="right">
            <div className="host">
                <h4 className="hostname">{appart.host.name}</h4>
                <div className="hostimage">
                    <img src={appart.host.picture} alt={appart.host.name} />
                </div>
            </div>
            <div className="stars">
                Etoiles
            </div>
        </div>
    </div>
  )
}

export default InfosAppart