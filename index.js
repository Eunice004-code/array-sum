function simpleArraySum() {
    const ar=[1,2,3,4,10,11];
    return ar.reduce ((total,number)=>total+number,0); 
  }
  const sum=simpleArraySum();
