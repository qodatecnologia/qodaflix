import React from 'react';

function ButtonLink(props){
    // props => {ClassName: "", href: "/"}
    return(
        <a href={props.href} className={props.className}>
            Upload Vídeo
        </a>
    );
}
export default ButtonLink;