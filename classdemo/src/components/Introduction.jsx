import React from 'react';

function Introduction() {
    return(
        <div class="container pt-5 my-5" id="Introduction">
            <div class="row align-baseline">
                <div class="col">
                    <h1>
                        <br/>Introduction
                    </h1>
                    <p>
                        Hi there! I'm Evan Owenby. Welcome to my website!<br/><br/>This is a site I developed with React for<br/>CPSC 4125 at Columbus State University.<br/><br/>Use the navbar above to navigate to the<br/>different regions of my resume site!
                    </p>
                </div>
                <div class="col">
                    <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="random programmer" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Introduction