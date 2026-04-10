function lupaus(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Kyllä Lähtee');
    }, 3000);
  });
}

lupaus().then((x) => console.log(x));
