function tayttyykoLupaus(x: boolean): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

//A
tayttyykoLupaus(true).then(
  () => console.log('kyllä'),
  () => console.log('ei'),
);
tayttyykoLupaus(false).then(
  () => console.log('kyllä'),
  () => console.log('ei'),
);

//B
tayttyykoLupaus(true)
  .then(() => console.log('kyllä'))
  .catch(() => console.log('ei'));
tayttyykoLupaus(false)
  .then(() => console.log('kyllä'))
  .catch(() => console.log('ei'));
