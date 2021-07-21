type StringOrNumber = string | number;
function padLeft(value: string, padding: StringOrNumber) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return `${padding} ${value}`;
  }

  throw new Error(
    `Padding es un valor tipo string, pero recibio un valor de tipo: ${(typeof padding).toUpperCase()}`
  );
}

console.log(padLeft("El titulo", 10));
