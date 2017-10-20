export const loadState = () => {
  try {
    const serializeData = localStorage.getItem('state');
    if(serialzeData === null){
      return undefined;
    }

    return JSON.parse(serializeData);
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  console.log('-------- saving data to local storage');
  try {
    const serializeData = JSON.stringify(state);
    localStorage.setItem('state', serializeData);
  } catch (e) {
    console.log('state save fail for ' + e);
  }
}
