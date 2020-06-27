import { PostClient } from './../applicationLibrary/clients/PostClient';
import postData from '../resources/PostData.json';

describe(`Validate Posts`, () => {
    test(`Validate Post Creation`, async () => {
        let postClient = new PostClient();
        let postId = await postClient.createPost(postData);

        expect(postId).not.toBeUndefined();
    });
});