let globalId = 1;

function generateId() {
  globalId += 1;
  return globalId;
}

let data = [
  {
    id: generateId(),
    name: "Item1",
    someField: "1234",
  },
  {
    id: generateId(),
    name: "Item2",
    someField: "1234",
  },
  {
    id: generateId(),
    name: "Item3",
    someField: "1234",
  },
  {
    id: generateId(),
    name: "Kappa",
    someField: "1234",
  },
];

export function getAll() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data]);
    }, 1000);
  });
}

export function get(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find((element) => element.id === id));
    }, 1000);
  });
}

export function create(params) {
  const id = generateId();
  data.push({
    id: id,
    ...params,
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
}

export function update(params) {
  let index = data.findIndex((element) => element.id === params.id);
  data[index] = { ...data[index], ...params };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params.id);
    }, 1000);
  });
}

export function destroy(id) {
  return new Promise((resolve) => {
    data = data.filter((element) => element.id !== id);
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
