import fetch from 'node-fetch';

async function ambilDataUserAsync() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}

export default ambilDataUserAsync;
