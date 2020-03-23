import React from "react";
import {connect} from "react-redux";
import {profileThunk, statusThunk, updateStatusThunk} from "../../redux/profile-reducer";
import Profile from "./Profile";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if (!this.props.match.params.userId) {
            this.props.match.params.userId = 6244
        }
        this.props.profileThunk(this.props.match.params.userId);
        this.props.statusThunk(this.props.match.params.userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.profilePage,
    }
};

export default compose(
    connect(mapStateToProps, {profileThunk,statusThunk,updateStatusThunk}),withRouter)(ProfileContainer);