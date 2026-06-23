// ════════════════════════════════════════════════════════════════
//  جسر المزايا الأصلية (Native Bridge)
//  يربط مزايا الجهاز (اهتزاز، إشعارات، شريط حالة) بالتطبيق.
//  كل دالة آمنة: تشتغل على iOS/Android، وتُتجاهل بهدوء على الويب.
// ════════════════════════════════════════════════════════════════

import { Capacitor } from '@capacitor/core';

// هل نعمل داخل تطبيق أصلي (وليس متصفّح ويب)؟
export const isNative = Capacitor.isNativePlatform();
export const platform = Capacitor.getPlatform(); // 'ios' | 'android' | 'web'

// ─── الاهتزاز (Haptics) ───────────────────────────────────────────
// اهتزاز خفيف عند الإجابة الصحيحة / النقر
export async function hapticLight() {
  if (!isNative) return;
  try {
    const { Haptics, ImpactStyle } = await import('@capacitor/haptics');
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch { /* ignore */ }
}

// اهتزاز متوسط عند فتح الكنز / إنجاز
export async function hapticMedium() {
  if (!isNative) return;
  try {
    const { Haptics, ImpactStyle } = await import('@capacitor/haptics');
    await Haptics.impact({ style: ImpactStyle.Medium });
  } catch { /* ignore */ }
}

// اهتزاز نجاح (عند اجتياز درس)
export async function hapticSuccess() {
  if (!isNative) return;
  try {
    const { Haptics, NotificationType } = await import('@capacitor/haptics');
    await Haptics.notification({ type: NotificationType.Success });
  } catch { /* ignore */ }
}

// اهتزاز خطأ (عند إجابة خاطئة)
export async function hapticError() {
  if (!isNative) return;
  try {
    const { Haptics, NotificationType } = await import('@capacitor/haptics');
    await Haptics.notification({ type: NotificationType.Error });
  } catch { /* ignore */ }
}

// ─── شريط الحالة (Status Bar) ─────────────────────────────────────
// لون شريط الحالة حسب لون الوحدة الحالية
export async function setStatusBarColor(hexColor: string) {
  if (!isNative) return;
  try {
    const { StatusBar, Style } = await import('@capacitor/status-bar');
    await StatusBar.setBackgroundColor({ color: hexColor });
    await StatusBar.setStyle({ style: Style.Light });
  } catch { /* ignore */ }
}

// ─── إخفاء شاشة البداية (Splash) بعد التحميل ──────────────────────
export async function hideSplash() {
  if (!isNative) return;
  try {
    const { SplashScreen } = await import('@capacitor/splash-screen');
    await SplashScreen.hide();
  } catch { /* ignore */ }
}

// ─── الإشعارات المحلية (تذكير الدراسة اليومي) ─────────────────────
// يطلب الإذن ثم يجدول تذكيراً يومياً في الساعة المحدّدة
export async function scheduleDailyReminder(hour = 19, minute = 0) {
  if (!isNative) return false;
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') return false;

    // ألغِ التذكيرات القديمة أولاً
    const pending = await LocalNotifications.getPending();
    if (pending.notifications.length > 0) {
      await LocalNotifications.cancel({ notifications: pending.notifications });
    }

    await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: 'مسار الإنجليزية 📚',
        body: 'حان وقت درسك اليومي! واصل سلسلتك ولا تكسرها 🔥',
        schedule: { on: { hour, minute }, repeats: true },
      }],
    });
    return true;
  } catch {
    return false;
  }
}

// إلغاء التذكير اليومي
export async function cancelDailyReminder() {
  if (!isNative) return;
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
  } catch { /* ignore */ }
}

// ─── زر الرجوع (Android) ──────────────────────────────────────────
// يمنع إغلاق التطبيق عند ضغط زر الرجوع في الصفحة الرئيسية
export async function setupBackButton(onExit: () => void) {
  if (!isNative) return;
  try {
    const { App } = await import('@capacitor/app');
    App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        onExit();
      }
    });
  } catch { /* ignore */ }
}
