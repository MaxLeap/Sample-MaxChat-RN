package com.demoimreactnative;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.maxleap.reactnative.MaxLeap;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {
    private MaxLeap maxLeap;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DemoIMReactNative";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // 确保在 super.onCreate() 之前调用以下代码
        maxLeap = new MaxLeap(this, "MAXLEAP_APPID", "MAXLEAP_CLIENTKEY");
        super.onCreate(savedInstanceState);
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
            new ExtraDimensionsPackage(this),
            new ReactNativeDialogsPackage(),
                maxLeap.getReactPackage()
        );
    }
}
