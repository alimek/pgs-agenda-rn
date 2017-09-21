package com.pgstripagenda;

import android.app.Application;

import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.microsoft.azure.mobile.react.crashes.RNCrashesPackage;
import com.microsoft.azure.mobile.react.analytics.RNAnalyticsPackage;
import com.microsoft.azure.mobile.react.mobilecenter.RNMobileCenterPackage;
import com.reactnativenavigation.bridge.NavigationReactPackage;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new VectorIconsPackage(),
            new RNCrashesPackage(MainApplication.this, getResources().getString(R.string.mobileCenterCrashes_whenToSendCrashes)),
            new RNAnalyticsPackage(MainApplication.this, getResources().getString(R.string.mobileCenterAnalytics_whenToEnableAnalytics)),
            new RNMobileCenterPackage(MainApplication.this),
            new NavigationReactPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
