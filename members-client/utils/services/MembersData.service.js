import axiosinstance from '../api/axios';

const getUsers = async () => {
  try {
    const response = await axiosinstance.get('members');

    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (user, method) => {
  try {
    const response = await axiosinstance[method]('members', {
      data: {
        user: user,
      },
    });

    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, updateUser };
