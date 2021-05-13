export const init = async (flags?: unknown): Promise<boolean> => {
  console.log("init was called\n" + JSON.stringify(flags));
  return Promise.resolve(true);
};
