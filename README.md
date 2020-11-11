# detox-react-native

This steps run detox locally

## Requirements
- node 8.3.0 or above
- macOS 10.14 or higher
- xcode 10.2 or higher
    - iOS Simulator Runtime: iOS 12.2 or higher

## Install dependencies
- `npm install -g detox-cli`
- `npm install jest jest-circus --save-dev --no-package-lock`
- `detox init -r jest`

### Android
- Have `java -version` in "1.8.x_abc". [Mac](https://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac).
- Have [ANDROID_SDK_ROOT and ANDROID_HOME](https://developer.android.com/studio/command-line/variables) correctly configured
- `$ANDROID_HOME/tools/bin/sdkmanager "system-images;android-28;default;x86_64"`
- `$ANDROID_HOME/tools/bin/sdkmanager --licenses`
- `$ANDROID_HOME/tools/bin/avdmanager create avd -n Pixel_API_28_AOSP -d pixel --package "system-images;android-28;default;x86_64"`
- `$ANDROID_HOME/emulator/emulator -verbose @Pixel_API_28_AOSP &`
- Change location from your sdk in `android/local.properties` file.

### iOS
- Verify Xcode command line tools is installed by typing `gcc -v` in terminal.
- xcode-select --install
- brew tap wix/brew
- brew install applesimutils

## Build and run test

- `detox build --configuration ios.sim.debug`

The last commands needs that you have an id from a simulator. To see this id: run in other terminal `npx react-native run-ios` and copy paste it on `.detoxrc.json` file: In `-destination id=<your_simulator_id>`

- `npx react-native start`

- In another terminal run `detox test --configuration ios.sim.debug`

Analogously for android.

## Troubleshooting
SDK “iphoneos” cannot be located. 
[How to fix it](https://www.ryadel.com/en/xcode-sdk-iphoneos-cannot-be-located-mac-osx-error-fix/)