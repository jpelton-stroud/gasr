#!/usr/bin/env node
import meow, { AnyFlags } from "meow";
import { generate } from "./generate";
import { init } from "./init";

const HELP_TEXT = "Usage text";

const CLI_FLAGS: AnyFlags = {
  help: {
    alias: "h",
    type: "boolean",
    default: false,
  },
  yes: {
    alias: "y",
    type: "boolean",
    default: false,
  },
  no: {
    alias: "n",
    type: "boolean",
    default: false,
  },
  dryRun: {
    type: "boolean",
    default: false,
  },
};

const cli = meow({
  autoVersion: true,
  help: HELP_TEXT,
  flags: CLI_FLAGS,
});

interface ActionTable {
  readonly [key: string]: (f: unknown) => Promise<boolean>;
}

const actionTable: ActionTable = {
  init: (f) => init(f),
  generate: (f) => generate(f),
};

if (cli.input.length < 1) cli.showHelp(1);
else parseInput(cli.input[0], cli.input.slice(1));

function parseInput(action: string, args: string[]) {
  actionTable[action]?.(cli.flags);
}
