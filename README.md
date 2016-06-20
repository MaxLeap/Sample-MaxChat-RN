# Sample-MaxChat-RN

本项目是基于 MaxLeap ReactNative SDK 开发的一个实例。

## 使用步骤：

1. clone 项目到本地并执行 `npm install` 安装依赖。

2. 在 https://www.maxleap.cn 中创建任意应用，记录 appid 和 clientkey。

3. 更换 `/ios/DemoIMReactNative/AppDelegate.m` 文件中的 `MAXLEAP_APPID` 和 `MAXLEAP_CLIENTKEY` 为步骤 1 中的 appid 和 clientkey。

	```objc
  [MaxLeap setApplicationId:@"MAXLEAP_APPID" clientKey:@"MAXLEAP_CLIENTKEY" site:MLSiteCN];
	```

4. 分别替换 `/android/app/src/main/java/com/maxnews/MainActivity.java` 中的 `MAXLEAP_APPID` 和 `MAXLEAP_CLIENTKEY` 为步骤 1 中的 appid 和 clientkey。

	```
	@Override
	protected void onCreate(Bundle savedInstanceState) {
	    // 确保在 super.onCreate() 之前调用以下代码
	    maxLeap = new MaxLeap(this, "MAXLEAP_APPID", "MAXLEAP_CLIENTKEY");
	    super.onCreate(savedInstanceState);
	}
	```

5. 更换 `src/modules/user/actions/index.js` 文件中的 `MAXLEAP_APPID` 和 `MAXLEAP_CLIENTKEY` 为步骤 1 中的 appid 和 clientkey。

	```js
  data = Object.assign({
      appId: 'MAXLEAP_APPID',
      clientId: 'MAXLEAP_CLIENTKEY',
      region: 'cn'
  }, {
      username: data.username,
      password: data.password
  });
	```
	
6. 执行 `react-native run-android` 或 `react-native run-ios` 启动对应平台的应用。
