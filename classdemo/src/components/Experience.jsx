import React from 'react';

function Experience() {
    return(
        <div class="container pt-5 my-5" id="Experience">
            <div class="row align-baseline">
                <div class="col">
                    <h1>
                        Experience
                    </h1>
                    <h3>2022 Columbus State University, Columbus, GA</h3>
                    <p>
                        Served as help desk assistant to help users reset account credentials and complete troubleshooting methods.
                        {/* <i>Recognized for providing technical assistance with patience and a pleasant demeanor.</i> */}
                    </p>
                    <h3>2022 Impact360 Institute, Pine Mountain, GA</h3>
                    <p>
                        Supported users and staff with general technology knowledge and understanding of many different systems used across the campus by separate groups.
                        {/* <i>Acknowledged for being a quick learner and being adaptable to figuring out how to best help with each presented problem.</i> */}
                    </p>
                    <h3>2019-2022 Woodward Academy, College Park, GA</h3>
                    <p>
                        Provided service to staff and students with various issues, including technical assistance, hardware repairs, and solutions troubleshooting.
                        {/* <i>Valued among the IT team for having professional conduct and patience with users, as well as providing unique solutions for issues as they arose.</i> */}
                    </p>
                </div>
                <div class="col">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="collaborative workplace" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Experience