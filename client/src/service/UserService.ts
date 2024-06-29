import axios from "../axios";

class UserService {
  createUser = async (data: any) => {
    console.log(data);

    const promise = new Promise((resolve, reject) => {
      axios
        .post("user", data)
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
