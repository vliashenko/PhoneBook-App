const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getStatus = state => state.auth.status;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getStatus
};

export default authSelectors;