
import helloWorld from './helloWorld';
import ambilDataUser from './ambilDataUser';
import ambilDataUserAsync from './ambilDataUserAsync';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

function ambilDataUser()

async function fetchData() {
  try {
    const users = await ambilDataUser();
    console.log(users);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

function ambilDataUserAsync()

messages();
fetchData();
ambilDataUserAsync();
