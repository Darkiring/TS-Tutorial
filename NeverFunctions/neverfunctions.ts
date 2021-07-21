// You never return anything from a never type function in TS
const throwError = (message: string): never => {
  throw new Error(message);
};

throwError("Error");
