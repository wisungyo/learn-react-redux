import React, { useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/usersActions';
import UserItem from './UserItem';
import ErrorMessage from './ErrorMessage';

function UsersComponent({ userData, fetchUsers }) {
    const { loading, users, error } = userData;

    useEffect(() => {
        fetchUsers();
    }, []);

    const isLoading = loading && (
        <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={loading}
        />
    );

    const hasError = error && <ErrorMessage error={error} />;

    return (
        <div>
            {isLoading || hasError || (
                <>
                    <p>User List</p>
                    {users && users.map(user => (
                        <UserItem key={user.id} name={user.name} />
                    ))}
                </>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);
