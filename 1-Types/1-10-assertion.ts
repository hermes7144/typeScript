{
  /* 
    Type Assertions
  */
  function jsStrFunc(): any {
    // return 'hello';
    return 2;
  }

  const result = jsStrFunc();
  console.log((result as String).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers.push(2);

  const button = document.querySelector('class');
  if (button) button.nodeValue = '11';
}
