import React, {useState} from "react";

function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고!</div>
    );
}
function MainPage(props){
    const [showWaring, setShowWarning]=useState(false);

    const handleToggleClick=()=>{
        setShowWarning(prevShowWarnig => !prevShowWarnig);
    }
    return(
        <div>
            <WarningBanner warning={showWaring} />
            <button onClick={{handleToggleClick}}>
                {showWaring?'감추기':'보이기'}
            </button>
        </div>
    );
}
export default WarningBanner;