type Props = {
  name1: string,
  name2?: string,
  name3: string | undefined,
  name4: string | null,
}

const props: Props = {
  name1: '',
  name3: undefined,
  name4: null,
}

const {name1 = 'name1', name2 = 'name2', name3 = 'name3', name4 = 'name4'} = props;

console.log("### name1:", name1);
console.log("### name2:", name2);
console.log("### name3:", name3);
console.log("### name4:", name4);
