const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getStatus = state => state.auth.status;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getStatus,
    getUserEmail
};

export default authSelectors;