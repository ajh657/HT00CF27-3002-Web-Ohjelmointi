interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response: Response) => response.json())
  .then((data: Post[]) =>
    data.forEach((i) => {
      console.log(i.title);
    }),
  );
