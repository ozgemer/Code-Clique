import axiosinstance from '../../api/axios';

async function getSpecList() {
  console.log('%cfetching spec list ...', 'color:chartreuse; font-weight:700');
  try {
    const data = await axiosinstance.get('/');
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function getSpecAt(index) {
  console.log(
    `%cselected%c spec no. %c${index}`,
    'color:green',
    '',
    'font-weight:700; color:yellow'
  );

  try {
    const data = await axiosinstance.get(`/${index}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateSpecAt(specData, index, user) {
  console.log(
    `%cupdating%c spec No. %c${index}`,
    'font-weight:700; color:cyan',
    '',
    'font-weight:700; color:yellow'
  );

  const result = await axiosinstance.post(`update/${index}`, {
    doc: specData,
    user: user,
  });
}

async function removeSpecAt(index) {
  console.log(
    `%cremoving%c spec No. %c${index}`,
    'font-weight:700;color:red',
    '',
    'font-weight:700; color:yellow'
  );
  try {
    const data = await axiosinstance(`/remove/${index}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function addSpec(user) {
  console.log(`%ccreating new spec`, 'font-weight:700; color:gray');
  try {
    const data = await axiosinstance.post('/add', { user: user });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateStatus(id, status) {
  try {
    await axiosinstance.put(`/status/${id}`, { status: status });
  } catch (error) {
    console.log(error);
  }
}

async function getStatusOptions() {
  try {
    const options = await axiosinstance(`/status`);
    return options.data;
  } catch (error) {
    console.log(error);
  }
}

async function getSpecsBySearch(string) {
  try {
    const { data } = await axiosinstance.post(`/search`, { query: string });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getSpecList,
  getSpecAt,
  updateSpecAt,
  removeSpecAt,
  addSpec,
  updateStatus,
  getStatusOptions,
  getSpecsBySearch,
};
