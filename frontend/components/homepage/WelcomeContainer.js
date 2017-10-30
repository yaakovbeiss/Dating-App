import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestUserProfile } from '../../actions/user_profile_actions';
import Welcome from './Welcome';

const mapStateToProps = ({ session, profile }) => {
  return {
    currentUser: session.currentUser,
    userProfile: profile.userProfile,
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestUserProfile: (userProfile) => dispatch(requestUserProfile(userProfile)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome));
