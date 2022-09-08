import React, { useEffect, useState } from "react";
import { getUsers } from "../service/users";
import Spinner from "./Spinner";
import UserTable from "./UserTable";
import { UserModal } from "./UserModal";
import InfiniteScroll from "react-infinite-scroll-component";


export default function UsersTable() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [location, setLocation] = useState({});

  useEffect(() => {
    getMoreUsers();
  }, [getMoreUsers]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getMoreUsers() {
    setLocation(true);
    getUsers()
      .then((apiData) => {
        let usersList = users.concat(apiData?.results);
        setUsers(usersList);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  }
  return (
 <InfiniteScroll
      dataLength={users?.length}
      next={() => getMoreUsers()}
      hasMore
    >
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          {loading && !users?.length ? (
            <Spinner/>
          ) : (
            users?.map((user) => (
              <UserTable user={user} setLocation={setLocation} />
            ))
          )}

          <UserModal location={location} />
        </tbody>
      </table>
</InfiniteScroll>
  );
}


