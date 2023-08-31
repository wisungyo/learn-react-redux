import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersActions';
import UserItem from './UserItem';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

function HooksUsersComponent() {
    const { loading, users, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const renderUserList = () => (
        <>
            <p>User List</p>
            {users.map(user => (
                <UserItem key={user.id} name={user.name} />
            ))}
        </>
    );

    return (
        <div>
            {loading && <Loading loading={loading} />}
            {error ? <ErrorMessage error={error} /> : renderUserList()}
        </div>
    );
}

export default HooksUsersComponent;
