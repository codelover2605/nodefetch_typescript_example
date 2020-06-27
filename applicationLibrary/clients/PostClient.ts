import { FetchPostsResponse } from './../response/FetchPostsResponse';
import { CreatePostRequest } from './../request/CreatePostRequest';
import { RequestWrapper, ServiceWrapper, BaseUrl, HttpMethod, EndPoints } from '../../index';

export class PostClient {

    public async createPost(postData: CreatePostRequest): Promise<String> {
        let request: RequestWrapper = {
            endPoint: `${BaseUrl.Dummy}${EndPoints.posts}`,
            method: HttpMethod.POST,
            body: postData
        }

        let response: FetchPostsResponse = await ServiceWrapper.getResponse(request);
        return response.id;
    }

    public async getPost(postId: number): Promise<FetchPostsResponse> {
        let request: RequestWrapper = {
            endPoint: `${BaseUrl.Dummy}${EndPoints.posts}/${postId}`,
            method: HttpMethod.GET
        }

        let response: FetchPostsResponse = await ServiceWrapper.getResponse(request);
        if (!response) {
            throw new Error(`Post with id ${postId} not found`);
        }
        return response;
    }

}