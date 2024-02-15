// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config : {
      apiKey: "AIzaSyApulDXpbhcWNJTdvH18wCEvGPJ_5-5g_Q",
      authDomain: "edificacion-app-fd2c9.firebaseapp.com",
      projectId: "edificacion-app-fd2c9",
      storageBucket: "edificacion-app-fd2c9.appspot.com",
      messagingSenderId: "8264356990",
      appId: "1:8264356990:web:ec488e21f94404d2d3b42f"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
