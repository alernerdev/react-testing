import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';
import axios from 'axios';

export function saveCommentAction(comment) {
    console.log('flowing through the saveComment action');
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchCommentsAction() {
    console.log('flowing through the fetchComments action');
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    // response is a promise
    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}