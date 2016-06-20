import React, {Component} from "react";
import {
    Actions,
    Scene,
    Router
} from "react-native-router-flux";
import userRoutes from "./modules/user/routes";
import contactsRoutes from "./modules/contacts/routes";
import chatRoutes from "./modules/chat/routes";
import recentMessageRoutes from "./modules/recentMessage/routes";

export default class Launcher extends Component {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar>
                    {userRoutes}
                    <Scene key='maxChat' tabs={true}>
                        {contactsRoutes}
                        {recentMessageRoutes}
                    </Scene>
                    {chatRoutes}
                </Scene>
            </Router>
        );
    }
}