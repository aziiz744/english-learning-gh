import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // معرّف التطبيق الفريد (Bundle ID) — غيّره لاسم نطاقك العكسي
  // مثال: com.yourname.englishpath — يجب أن يكون فريداً على App Store
  appId: 'com.englishpath.app',
  // اسم التطبيق كما يظهر تحت الأيقونة
  appName: 'مسار الإنجليزية',
  // مجلد ملفات الويب بعد البناء (Vite يبني في dist)
  webDir: 'dist',
  // إعدادات إضافية
  ios: {
    // خلفية بيضاء أثناء التحميل
    backgroundColor: '#ffffff',
    // السماح بالتمرير المرن (bounce) — إحساس أصلي
    scrollEnabled: true,
    // منع التكبير بالإصبعين (يبقى التطبيق ثابت المقاس)
    contentInset: 'always',
  },
  android: {
    backgroundColor: '#ffffff',
  },
  plugins: {
    // شاشة البداية (Splash)
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#7c3aed',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    },
    // شريط الحالة العلوي
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#7c3aed',
    },
    // الإشعارات المحلية (تذكير الدراسة اليومي)
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#7c3aed',
    },
  },
};

export default config;
