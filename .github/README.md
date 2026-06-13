# English Journey — GitHub Pages

تطبيق تعلم اللغة الإنجليزية جاهز للنشر على GitHub Pages مع Supabase.

## خطوات النشر

### 1. إعداد Supabase (مرة واحدة)
- افتح [supabase.com](https://supabase.com) وادخل على مشروعك
- روح **SQL Editor** وشغّل محتوى ملف `supabase-setup.sql` كاملاً
- روح **Authentication → Providers** وفعّل **Google**

### 2. رفع الكود على GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/english-journey.git
git push -u origin main
```

### 3. إعداد GitHub Pages
- افتح الـ repo على GitHub
- روح **Settings → Pages**
- اختر **Source: GitHub Actions**

### 4. إضافة المفاتيح (Secrets)
روح **Settings → Secrets and variables → Actions** وأضف:
- `VITE_SUPABASE_URL` = `https://ttxxhuycetajnagkbwkj.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = مفتاحك

### 5. Deploy
بمجرد ما تضغط push، الـ GitHub Actions تبني وتنشر تلقائياً ✅

## المميزات
- ✅ كل الدروس والتمارين (A1 → C2)
- ✅ حفظ التقدم على Supabase
- ✅ تسجيل دخول بـ Google
- ✅ الإنجازات والـ streak
- ✅ خارطة التعلم
- ✅ المساعد الذكي (يحتاج VITE_ANTHROPIC_KEY اختياري)
