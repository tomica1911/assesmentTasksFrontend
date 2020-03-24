import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import Lifons Frontend
// import Marwins Frontend

import App from './App';

const wrapper = (props) => {
    return(
        <Fragment>
            {/* <Route path="/landingpage" component={Lifons Component} />
             <Route path="/reg&login" component={Marwins Component} /> */}
            <Route path="/assesmentTasks" exact component={App} />
        </Fragment>
    );
}

export default wrapper;