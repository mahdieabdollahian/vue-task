const storageName = window.localStorage;

export const getStoredData = name => {
  return JSON.parse(storageName.getItem(name));
};

export const storeData = (name, data) => {
  storageName.setItem(name, JSON.stringify(data));
};

export default { getStoredData, storeData };
