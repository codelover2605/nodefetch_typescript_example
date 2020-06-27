import { UserClient } from './../applicationLibrary/clients/UserClient';
import users from '../resources/Users.json';
const userDetails = require('../resources/UserDetails.json');

describe("Validate Users", () => {

    test.each(users.users)("Validate %s details", async (name: string) => {
        let userClient = new UserClient();
        let user = await userClient.getUserDetails(name);
        expect(user).toEqual(userDetails[name]);
    })

})