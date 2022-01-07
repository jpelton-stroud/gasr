/**
 * Converts input to string
 * @param message any
 * @returns string
 */
export const echo = (message: any) => {
  switch (typeof message) {
    case "string":
      return message;
    case "number":
      return message.toString();
    case "object":
      return JSON.stringify(message);
    default:
      throw new Error("unknown type of input");
  }
};
