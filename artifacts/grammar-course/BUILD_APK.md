# How to Build the Android APK

Follow these steps on your computer (Windows, Mac, or Linux) to build the APK.

## What you need installed
- [Node.js 18+](https://nodejs.org)
- [pnpm](https://pnpm.io) — run `npm install -g pnpm`
- [Android Studio](https://developer.android.com/studio) (free)
- Java 17 (Android Studio installs this for you)

---

## Step 1 — Download the project
Download this project from Replit:
- Click the three-dot menu → **Download as zip**
- Unzip it on your computer

---

## Step 2 — Install dependencies
Open a terminal inside the `artifacts/grammar-course` folder and run:

```bash
pnpm install
```

---

## Step 3 — Build the web app
```bash
BASE_PATH=/ PORT=3000 pnpm build
```

On Windows (Command Prompt):
```cmd
set BASE_PATH=/
set PORT=3000
pnpm build
```

This creates the `dist/public` folder.

---

## Step 4 — Add Android platform
```bash
pnpm exec cap add android
```

---

## Step 5 — Copy web assets into Android
```bash
pnpm exec cap sync android
```

---

## Step 6 — Open in Android Studio
```bash
pnpm exec cap open android
```

---

## Step 7 — Build the APK in Android Studio
1. Wait for Gradle sync to finish.
2. In the top menu: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. Click **locate** when the notification appears.
4. Your APK is in: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## Step 8 — Install on your Android device
Enable **Developer Options** on your phone:
- Settings → About Phone → tap **Build Number** 7 times
- Settings → Developer Options → enable **USB Debugging**

Then run:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

Or just copy the APK file to your phone and tap it to install (enable "Install from unknown sources" in Settings).

---

## Tips
- The app works fully offline once installed.
- For a signed release APK (for Google Play), use **Build → Generate Signed Bundle/APK**.
