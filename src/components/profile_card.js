import React from 'react';
import Img from 'gatsby-image';

const ProfileCard = ({
    basic_info,
    bio,
    voice_actors,
    image,
}) => {
    
    return (
        <div className='profile-card'>
            <Img className='profile-card-image' fixed={image.childImageSharp.fixed} />
        </div>
    )
}

export default ProfileCard;
