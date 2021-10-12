import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from "../api";
import QualitiesList from "../components/qualitiesList";

const User = () => {
  const [user, setUser] = useState();
  const history = useHistory();
  const params = useParams();
  const { userId } = params;
  useEffect(() => {
    api.users.getById(userId).then((data) => {
      setUser(data);
    });
  }, [userId]);

  const handleAllUsers = () => {
    history.push("/users");
  };

  return (
    <>
      {user ? (
        <div className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            <QualitiesList qualities={user.qualities} />
            <h6 className="m-2">
              Completed Meetings: {user.completedMeetings}
            </h6>
            <h3>Rate: {user.rate}</h3>
            <button onClick={handleAllUsers} className="btn btn-secondary mt-3">
              Все пользователи
            </button>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default User;
