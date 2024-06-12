import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts";
import { BlePlxModule } from './BlePlxModule';
import Logger from './Logger';
import CommonConstants from './CommonConstants';


class BlePlxModulesFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    Logger.debug(CommonConstants.TAG, "test--BlePlx=createTurboModule>>>>>" + name);
    if (name == 'BlePlx') {
      return new BlePlxModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    Logger.debug(CommonConstants.TAG, "test--BlePlx=hasTurboModule>>>>>" + name);
    return name == 'BlePlx';
  }
}

export class BlePlxPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    Logger.debug(CommonConstants.TAG, "test--BlePlx=createTurboModulesFactory>>>>>");
    return new BlePlxModulesFactory(ctx);
  }
}