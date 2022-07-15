import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { deleteUsers, getAllUsers } from "../../redux/apiRequest";

import "./user.css";
import { loginSuccess } from "../../redux/authSlice";

const UserPage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  const handleDelete = (id) => {
    deleteUsers(user?.accessToken, dispatch, id, axiosJWT);
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT)
    }
  }, [])

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">{`Role: ${user?.role}`}</div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="home-user">
              <div >Username: {user.username}</div>
              <div >Email: {user.email}</div>
              <div >Role: {user.role}</div>
              <div className="del">
              <div className="delete-user" onClick={() => handleDelete(user._id)}> Delete </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default UserPage;

