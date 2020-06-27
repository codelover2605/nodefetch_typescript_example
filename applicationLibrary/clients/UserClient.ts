import { FetchUsersResponse } from './../response/FetchUsersResponse';
import { EndPoints, RequestWrapper, ServiceWrapper, HttpMethod, BaseUrl } from '../../index';

export class UserClient {

    public async getUserDetails(name: string): Promise<FetchUsersResponse> {
        let request: RequestWrapper = {
            endPoint: `${BaseUrl.Dummy}${EndPoints.users}`,
            method: HttpMethod.GET
        }

        let response = await ServiceWrapper.getResponse<Array<FetchUsersResponse>>(request);
        let users = response.filter(user => user.name == name);
        if (users.length == 0) {
            throw new Error(`User with name ${name} not found`);
        }

        return users[0];
    }

}