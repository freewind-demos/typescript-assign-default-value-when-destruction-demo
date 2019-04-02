type User = {
  username: string,
  active?: boolean
}

const user: User = {
  username: 'typescript'
}

const {username, active = true} = user;

console.log(username);
console.log(active);
