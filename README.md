<h1 align="center">
   Uber Ryde App 🚗💨 
</h1>

<h4 align="center">
   Uber Ryde with TypeScript, React Native, Expo, Zustand, Tailwind and Stripe.
</h4>

<p align="center">
  <a href="#iphone-mobile-application">Preview Application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-tech-stack">Tech Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#battery-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#evergreen_tree-file-structure">File Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :iphone: Mobile Application
<!-- ![App Screenshot](https://github.com/dev-danilo/ordering-app/blob/main/mobile.gif) -->
<p align="center">
  <img alt="" src="https://github.com/dev-danilo/ordering-app/blob/main/mobile.gif" height="400" >
</p>
Screenshots about the application:
<div style="display: flex;">
<p align="center">
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1728521670/uber-ryde/onboarding/yjtfg8veykfkhbxlozyj.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1728521670/uber-ryde/onboarding/oykkbx1zmopxttfapzdv.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1728521670/uber-ryde/onboarding/xkdb3ccpsqwfv3gxi0t8.png" height="400" >

<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/remove-product-cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/order-whatsapp.png" height="400" >
</p>
</div>

## :gear: Tech Stack

This project was developed with the following technologies:
- [Clerk](https://clerk.com/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [geoapify](https://www.geoapify.com/)
- [Google Maps](https://console.cloud.google.com/)
- [NativeWind](https://www.nativewind.dev/getting-started/typescript)
- [NeonDB](https://neon.tech/)
- [React Native](https://reactnative.dev/)
- [ReactJS](https://reactjs.org/)
- [Stripe](https://stripe.com/in)
- [Tailwind](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
<!-- - [WhatsApp API](https://business.whatsapp.com/developers/developer-hub?lang=pt_BR) -->
- [VS Code][vc] with [EditorConfig][vceditconfig], [Prettier][prettier] and [ESLint][vceslint]

## :battery: Features

👉 **Onboarding Flow**: Seamless user registration and setup process.

👉 **Email Password Authentication with Verification**: Secure login with email verification.

👉 **oAuth Using Google**: Easy login using Google credentials.

👉 **Authorization**: Secure access control for different user roles.

👉 **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.

👉 **Recent Rides**: View a list of recent rides at a glance.

👉 **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.

👉 **Find Rides**: Search for rides by entering 'From' and 'To' locations.

👉 **Select Rides from Map**: Choose available cars near your location from the map.

👉 **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.

👉 **Pay for Ride Using Stripe**: Make payments using multiple methods like cards and others.

👉 **Create Rides After Successful Payment**: Book a ride after confirming payment.

👉 **Profile**: Manage account details in the profile screen.

👉 **History**: Review all rides booked so far.

👉 **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

and many more, including code architecture and reusability

## :information_source: How to use

To clone and run this mobile application, you'll need [Git](https://git-scm.com), [Node.js v20][nodejs] or higher + [NPM v10][npm] or higher installed on your computer,
Do you can installed Expo and simulator/emulator follows the [guide][tutorial].

 <!-- [Xcode][xcode] with Simulator for iOS or [Android Studio][android-studio] Emulator for Android configured. Case don't have, follow this [tutorial][tutorial]. From your command line: -->

##### Clone this repository
```bash
$ git clone https://github.com/dev-danilo/uber-ryde.git
```
##### Go into the repository
```bash
$ cd uber-ryde
```
**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
DATABASE_URL=
EXPO_PUBLIC_SERVER_URL=
EXPO_PUBLIC_GEOAPIFY_API_KEY=
EXPO_PUBLIC_GOOGLE_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk, Stripe, NeonDB, Google Maps, and geoapify credentials. You can obtain these credentials by signing up on the **[Clerk](https://clerk.com/), [Stripe](https://stripe.com/in), [NeonDB](https://neon.tech/), [Google Maps](https://console.cloud.google.com/)** and **[geoapify](https://www.geoapify.com/)** websites respectively.

##### Install dependencies
```bash
$ npm i
```
##### Expo Go
```bash
$ npx expo start 
```

##### In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

<!-- # Read the QR code to running on your device

# Run your simulator(iOS) or emulator(android) and read the QR code to running on your device

# Run the app
$ npx expo start -->

## :evergreen_tree: File Structure

The file structure is as follows:

<!-- tree -I "node_modules" -->
<!-- tree -d -I "node_modules" only directories -->

```
.
├── README.md
├── app
│   ├── (api)
│   │   ├── (stripe)
│   │   │   ├── create+api.ts
│   │   │   └── pay+api.ts
│   │   ├── driver+api.ts
│   │   ├── ride
│   │   │   ├── [id]+api.ts
│   │   │   └── create+api.ts
│   │   └── user+api.ts
│   ├── (auth)
│   │   ├── _layout.tsx
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   └── welcome.tsx
│   ├── (root)
│   │   ├── (tabs)
│   │   │   ├── _layout.tsx
│   │   │   ├── chat.tsx
│   │   │   ├── home.tsx
│   │   │   ├── profile.tsx
│   │   │   └── rides.tsx
│   │   ├── _layout.tsx
│   │   ├── book-ride.tsx
│   │   ├── confirm-ride.tsx
│   │   └── find-ride.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   ├── _layout.tsx
│   └── index.tsx
├── app.json
├── assets
│   ├── fonts
│   │   ├── PlusJakartaSans-Bold.ttf
│   │   ├── PlusJakartaSans-BoldItalic.ttf
│   │   ├── PlusJakartaSans-ExtraBold.ttf
│   │   ├── PlusJakartaSans-ExtraBoldItalic.ttf
│   │   ├── PlusJakartaSans-ExtraLight.ttf
│   │   ├── PlusJakartaSans-ExtraLightItalic.ttf
│   │   ├── PlusJakartaSans-Italic.ttf
│   │   ├── PlusJakartaSans-Light.ttf
│   │   ├── PlusJakartaSans-LightItalic.ttf
│   │   ├── PlusJakartaSans-Medium.ttf
│   │   ├── PlusJakartaSans-MediumItalic.ttf
│   │   ├── PlusJakartaSans-Regular.ttf
│   │   ├── PlusJakartaSans-SemiBold.ttf
│   │   └── PlusJakartaSans-SemiBoldItalic.ttf
│   ├── icons
│   │   ├── arrow-down.png
│   │   ├── arrow-up.png
│   │   ├── back-arrow.png
│   │   ├── chat.png
│   │   ├── check.png
│   │   ├── close.png
│   │   ├── dollar.png
│   │   ├── email.png
│   │   ├── eyecross.png
│   │   ├── google.png
│   │   ├── home.png
│   │   ├── list.png
│   │   ├── lock.png
│   │   ├── map.png
│   │   ├── marker.png
│   │   ├── out.png
│   │   ├── person.png
│   │   ├── pin.png
│   │   ├── point.png
│   │   ├── profile.png
│   │   ├── search.png
│   │   ├── selected-marker.png
│   │   ├── star.png
│   │   ├── target.png
│   │   └── to.png
│   └── images
│       ├── adaptive-icon.png
│       ├── check.png
│       ├── favicon.png
│       ├── get-started.png
│       ├── icon.png
│       ├── message.png
│       ├── no-result.png
│       ├── onboarding1.png
│       ├── onboarding2.png
│       ├── onboarding3.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       ├── signup-car.png
│       └── splash.png
├── babel.config.js
├── components
│   ├── CustomButton.tsx
│   ├── DriverCard.tsx
│   ├── GoogleTextInput.tsx
│   ├── InputField.tsx
│   ├── Map.tsx
│   ├── OAuth.tsx
│   ├── Payment.tsx
│   ├── RideCard.tsx
│   └── RideLayout.tsx
├── constants
│   └── index.ts
├── expo-env.d.ts
├── lib
│   ├── auth.ts
│   ├── fetch.ts
│   ├── map.ts
│   └── utils.ts
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── scripts
│   └── reset-project.js
├── store
│   └── index.ts
├── tailwind.config.js
├── tsconfig.json
└── types
    ├── enums.ts
    ├── image.d.ts
    └── type.d.ts

18 directories, 106 files
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dev-danilo/uber-ryde/blob/main/LICENSE) for more information.

---

Made by Danilo Pereira :wave: [Get in touch!](https://www.linkedin.com/in/danilopx/)

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[prettier]: https://prettier.io/
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[tutorial]: https://react-native.rocketseat.dev/
[xcode]: https://developer.apple.com/xcode/
[android-studio]: https://developer.apple.com/xcode/
