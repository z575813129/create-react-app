import React from "react";

function NoMatch({location}) {
    return (<div>404, {location.pathname}不存在 </div>)
}

export default NoMatch