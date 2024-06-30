import axios from "../axios";

class UserService {
  createUser = async (data: any) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("user/save", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  loginUser = async (data: any) => {
    console.log(data);
    const promise = new Promise((resolve, reject) => {
      axios
        .post("user/login", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };
}

export default new UserService();
