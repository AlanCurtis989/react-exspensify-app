// this file pretends to be moment library for test cases.
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp);
};