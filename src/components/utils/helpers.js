

export function isEqual(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
  
    if (props1.length !== props2.length) {
      return false;
    }
  

    for (let i = 0; i < props1.length; i += 1) {
      const prop = props1[i];
  
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
  
    return true;
}


export function isAnagram(text1, text2) {
  const props1 = text1.split('').sort().join('').trim()
  const props2 = text2.replace('\n', '').split('').sort().join('').trim()


  return props1 === props2
}