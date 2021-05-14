#!/usr/bin/env node
import meow, { AnyFlags } from "meow";
import path from "path";

import { Args } from "./index";
import { init } from "./init";
import { generate } from "./generate";

const HELP_TEXT = `

    gasr <command> [options]

Commands
    init            Create scaffolding for a new Google Apps Script project
    generate        Create scaffolding for a new UI component

Options
    -h, --help      Displays this help text
    -y, --yes       Assume "yes" on all interactive prompts
    -n, --no        Assume "no" on all interactive prompts
    --dry-run       Don't commit any changes

Usage
    gasr init
    gasr generate
`;

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
  readonly [key: string]: (f: Args) => Promise<boolean>;
}

const actionTable: ActionTable = {
  init: (p) => init(p),
  generate: (p) => generate(p),
};

if (cli.input.length < 1 || cli.flags.help) cli.showHelp(1);
else parseInput(cli.input[0], cli.input.slice(1));

function parseInput(action: string, args: string[]) {
  actionTable[action]?.({
    // Paths are relative to the transpiled output files.
    gasrRoot: path.resolve(__dirname, "../.."),
    targetRoot: process.cwd(),
    flags: cli.flags,
  });
}
