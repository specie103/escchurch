import React from 'react';

const LocationMap = () => {
    return (
        <div>
            <div className='map-container '>
                <iframe className='map-iframe'
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=English%20Service%20Chapel%20C&amp;S%20Movement%20Church%20Surulere%20District%20Headquarters,%20Muyiwa%20Opaleye%20Street,%20Lagos,%20Nigeria+(English%20Service%20Chapel%20C&amp;S%20Movement,%20Ayo%20Ni%20O)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameBorder="0"
                allowFullScreen></iframe>
            </div>
            
        </div>
    );
};

export default LocationMap;
