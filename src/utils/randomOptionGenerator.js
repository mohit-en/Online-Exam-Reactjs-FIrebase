function randomiseData(props) {
  var index = props.length;
  var randomIndex;
  while (index) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [props[index], props[randomIndex]] = [props[randomIndex], props[index]];
  }
  return props ? props.splice(20) : [];
}

export { randomiseData };
