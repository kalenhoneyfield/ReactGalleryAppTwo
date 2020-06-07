import React from 'react'


//SVG found here: https://codepen.io/nikhil8krishnan/pen/rVoXJa?__cf_chl_jschl_tk__=88bbbea0af3b1cf50c51948adeaabfe88b596839-1591491452-0-Abe-2k8Gr7A1StBHUSSfuq3HKzdGfpBzttSLgFosvmLYH0DMgHTyKIR7YbreR_5TCV_704G0vEiyOQeRmiH1UyuUx10KJdg4lNz_vyQYoGIy_KflniJmxSf6kPGmV1nJpqheRqEUBDE0JZNyMJFLG0udSPYyI-WdUvq7gIbUPVQDnYEpMu1osQ-5rQKPTerFppfpqYr-z7lUqcz3ZESQ0ZAaCq9tM7xPpK7YIJPkyySx7SKF_lQ3NcdTJpDKAR4ZOtIuZDHzQ5PPutyCEFO1LCwnt5Bbr5IZjSyX1tQ19Wk7g49i-D4_heTuZLAZlR5lcD3dWMetLbp8y2z-Zvu8Y78YyOD3MoROHorpQwsJ8Y-KeiIBE3MJKUxJBLBgpFZyUw
const Loading = () => {
    return(
        <div className="Loading">
            <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                <circle fill="#df367c" stroke="none" cx="30" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"/>    
                </circle>
                <circle fill="#df367c" stroke="none" cx="50" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.2"/>       
                </circle>
                <circle fill="#df367c" stroke="none" cx="70" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.3"/>     
                </circle>
            </svg>
        Loading
        </div>
    )
}

export default Loading