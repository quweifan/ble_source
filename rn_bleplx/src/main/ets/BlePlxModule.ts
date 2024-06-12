import { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import Logger from './Logger';
import CommonConstants from './CommonConstants';

export class BlePlxModule extends TurboModule{
  static NAME = 'BlePlx';
  context: TurboModuleContext


  constructor(ctx: TurboModuleContext) {
    super(ctx);
    Logger.debug(CommonConstants.TAG, 'test--SQLitePlugin=>>>>>SQLitePluginTurboModule constructor');
    this.context = ctx;
  }
}