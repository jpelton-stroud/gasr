export const generate = async (flags?: unknown): Promise<boolean> => {
  console.log("generate was called\n" + JSON.stringify(flags));
  return Promise.resolve(true);
};
