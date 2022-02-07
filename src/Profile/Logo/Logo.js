import React from 'react';


const Logo = (props) => {
    
    if(props.src.photos === null) {
        return (
            <img src={'https://p7.hiclipart.com/preview/32/407/768/computer-icons-man-clip-art-man.jpg'}/>
        )
    } else {
        return (
            <img src={props.src.photos}/>
        )
    }
}

export default Logo;