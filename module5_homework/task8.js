let lehaMap = new Map (
    [ ['red'  , '150'],
      ['blue' , '400'],
      ['green' ,'800'] 
    ]);
    
    lehaMap.forEach((values, key, map) => {
      console.log (`Ключ - ${key} Значение - ${values} `);
    });