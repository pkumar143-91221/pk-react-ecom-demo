import React from 'react'

function Breadcrumb(props) {
    const lastElement = props.value.length > 0 ? props.value[props.value.length - 1] : undefined;
    const breadcrumbList = props.value.map((element, index) => {
    let active = element === lastElement ? 'active' : "";
        return (
            <li key={index} className={`breadcrumb-item ${active}`}>
                {element}
            </li>
        );
    });
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbList}
            </ol>
        </nav>
    )
}

export default Breadcrumb;