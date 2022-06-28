export const auth = async (path, user) => {
  try {
    let res = await fetch(`http://localhost:5902/users${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    });
    // console.log(res);
    let data = await res.json();
    if (data.status == "success") {
      return data.token;
    }
    alert("please enter valid details");
    // console.log(data, "data");
  } catch (error) {
    alert(error);
  }
};
