import type {TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {

  // NativeModule methods

  addListener(eventName:String): void;

  removeListeners(count:Number): void;
  
  createClient(restoreStateIdentifier:String):void;

  destroyClient():void;

  cancelTransaction(transactionId:String):void;

  setLogLevel(logLevel:String):void;

  logLevel():Promise<Object>;

  enable(transactionId:String):Promise<Object>;

  disable(transactionId: String): Promise<Object>;

  state(): Promise<Object>;

  startDeviceScan(filteredUUIDs?: Array<String>,options?:Object):void;

  stopDeviceScan():void;

  requestConnectionPriorityForDevice(deviceId:String,connectionPriority:Number,transactionId:String):Promise<Object>;

  readRSSIForDevice(deviceId:String,transactionId:String):Promise<Object>;

  requestMTUForDevice(deviceId:String,mtu:Number,transactionId:String):Promise<Object>;

  devices(deviceIdentifiers:Array<String>):Promise<Array<Object>>;

  connectedDevices(serviceUUIDs: Array<String>):Promise<Array<Object>>;

  connectToDevice(deviceId:String,options?:Object):Promise<Object>;

  cancelDeviceConnection(deviceId:String):Promise<Object>;

  isDeviceConnected(deviceId:String):Promise<Boolean>;

  discoverAllServicesAndCharacteristicsForDevice(deviceId:String,transactionId:String): Promise<Object>;

  servicesForDevice(deviceId:String):Promise<Array<Object>>;

  characteristicsForDevice(deviceId:String,serviceUUID:String): Promise<Array<Object>>;

  characteristicsForService(serviceIdentifier:Number): Promise<Array<Object>>;

  descriptorsForDevice(deviceId:String, serviceUUID:String, characteristicUUID:String): Promise<Array<Object>>; //Object-->NativeDescriptor

  descriptorsForService(serviceIdentifier:Number, characteristicUUID:String): Promise<Array<Object>>; //Object-->NativeDescriptor

  descriptorsForCharacteristic(characteristicIdentifier:Number): Promise<Array<Object>>; //Object-->NativeDescriptor

  readCharacteristicForDevice(deviceId:String, serviceUUID:String, characteristicUUID:String,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  readCharacteristicForService(serviceIdentifier:Number, characteristicUUID:String,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  readCharacteristic(characteristicIdentifer:Number,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  writeCharacteristicForDevice(deviceId:String,serviceUUID:String,characteristicUUID:String,valueBase64:String,response:Boolean,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  writeCharacteristicForService(serviceIdentifier:Number, characteristicUUID:String,valueBase64:String,response:Boolean,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  writeCharacteristic(characteristicIdentifier:Number,valueBase64:String,response:Boolean,transactionId:String): Promise<Object>;//Object-->NativeCharacteristic

  monitorCharacteristicForDevice(deviceId:String, serviceUUID:String, characteristicUUID:String,transactionId:String): Promise<void>;

  monitorCharacteristicForService(serviceIdentifier:Number, characteristicUUID:String,transactionId:String): Promise<void>;

  monitorCharacteristic(characteristicIdentifier:Number,transactionId:String):Promise<void>;

  readDescriptorForDevice(deviceId:String,serviceUUID:String,characteristicUUID:String,descriptorUUID:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  readDescriptorForService(serviceIdentifier:Number, characteristicUUID:String,descriptorUUID:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  readDescriptorForCharacteristic(characteristicIdentifier:Number,descriptorUUID:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  readDescriptor(descriptorIdentifier:Number,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  writeDescriptorForDevice(deviceId:String,serviceUUID:String,characteristicUUID:String,descriptorUUID:String,valueBase64:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  writeDescriptorForService(serviceIdentifier:Number, characteristicUUID:String,descriptorUUID:String,valueBase64:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  writeDescriptorForCharacteristic(characteristicIdentifier:Number,descriptorUUID:String,valueBase64:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  writeDescriptor(descriptorIdentifier:Number,valueBase64:String,transactionId:String): Promise<Object>;//Object-->NativeDescriptor

  // Events

  /**
   * New scanned event arrived as [?Error, ?NativeDevice] object.
   * @private
   */
  ScanEvent: string;

  /**
   * Characteristic value update broadcasted due to registered notification as
   * [?Error, ?NativeCharacteristic, ?TransactionId].
   * @private
   */
  ReadEvent: string;

  /**
   * BLE Manager changed its state as $Keys<typeof State>
   * @private
   */
  StateChangeEvent: string;

  /**
   * BLE Manager restored its internal state
   * @private
   */
  RestoreStateEvent: string;

  /**
   * Device disconnected as [Error?, NativeDevice]
   * @private
   */
  DisconnectionEvent: string;

}

export default TurboModuleRegistry.getEnforcing<Spec>('BlePlx');