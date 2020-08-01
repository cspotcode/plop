import Liftoff = require("liftoff");
import * as ora from "ora";

import { EventEmitter } from 'events';
import {PathSpec} from 'fined';
export type __debug__ = [EventEmitter, PathSpec];

export {
    ActionConfig,
    ActionType,
    AddActionConfig,
    AddManyActionConfig,
    AppendActionConfig,
    CustomActionFunction,
    ModifyActionConfig,
    PlopCfg,
    PlopGenerator,
    NodePlopAPI
} from '@cspotcode/node-plop';

export const Plop: Liftoff;
export const run: (env: Liftoff.LiftoffEnv, _: any, passArgsBeforeDashes: boolean) => void;
export const progressSpinner: ora.Ora;
