{
  // JavaScript
  function jsFetchNum(id: string) {
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function tssFetchNum(id: string): Promise<number> {
    // code...
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna', undefined);

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
