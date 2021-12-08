    import React from 'react';

function IconComponent(props) {
    return (
        <>
            <img src={props.ing_icon} style={{width:'50px',height:'50px',marginLeft:'10px'}}/><span>{props.ing_name}</span>
        </>
        
    );
}

export default IconComponent;