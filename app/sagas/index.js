
import { fork, all } from 'redux-saga/effects';
import login from './login.saga';

function* root() {
    yield all([
        yield fork(login)
    ]);
}

export default root;