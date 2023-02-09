//  typeof
type IDType = string | number;

function bar(id: IDType) {
  if (typeof id === "string") {
    let len = id.length;
  }
}

//

export {};
