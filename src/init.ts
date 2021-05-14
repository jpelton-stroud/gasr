import { Args } from "./index";

export const init = async (args: Args): Promise<boolean> => {
  console.log("init was called\n" + JSON.stringify(args));
  return Promise.resolve(true);
};
