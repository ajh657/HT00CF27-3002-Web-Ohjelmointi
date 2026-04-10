interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

async function GetPosts(): Promise<Post[]> {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return await response.json();
}

async function GetUser(id: number): Promise<User> {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users?id=' + id,
  );

  if (response.status != 200) {
  }

  const data: User[] = await response.json();

  if (
    data == undefined ||
    data.length > 1 ||
    data.length == 0 ||
    data[0] == undefined
  ) {
    throw new Error('Invalid Data');
  }

  return data[0];
}

const posts: Post[] = await GetPosts();

const post = posts.filter((x) => x.id == 14)[0];

if (post != undefined) {
  const user: User = await GetUser(post.userId);
  console.log(user.name);
  console.log(user.phone);
}
