import { useState } from "react";
import axios from "axios";
export default function UserForm(props) {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = `https://api.github.com/users/${userName}`;
    let resp = await await axios.get(query);
    console.log(resp);
    props.onSubmit(resp.data);
  };
  const ChangeNameHandler = (event) => {
    setUserName(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label"> Username:
          <input
            type="text"
            className="form-control"
            placeholder="Enter Github Account Name"
            name="userName"
            onChange={ChangeNameHandler}
          ></input>

        </label>
      </div>
      <div>
        <button className="btn btn-success">send</button>
      </div>
    </form>
  );
}
