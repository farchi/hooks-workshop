let subscribers = [];

export const subscribe = (callback) => {
  subscribers.push(callback);
};

export const unsubscribe = (callback) => {
  subscribers = subscribers.filter((cb) => callback !== cb);
};

export const changeColor = (newColor) => {
  subscribers.forEach((callback) => callback(newColor));
};
