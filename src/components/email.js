import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Route, Switch, Redirect} from 'react-router-dom';



export default function Email() {
    return (
        <div className="email">
            <Sidebar />
            <main>
            <Redirect from="/" to="/inbox" component={EmailList} />
                <Switch>
                    <Route exact path="/:folderId" component={EmailList} />
                    <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                    {/* <SingleEmail folderId="inbox" emailId="1" /> */}
                </Switch>
            </main>
        </div>
    );
}
