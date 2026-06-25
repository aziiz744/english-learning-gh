// عرض صور الكلمات بالإيموجي مباشرة — واضح، فوري، بدون إنترنت
import type { ReactElement } from "react";

// قاموس شامل: كل كلمة بصرية → إيموجي دقيق ومناسب
const EMOJI_MAP: Record<string, string> = {
  // مشروبات وطعام
  tea: "🍵", coffee: "☕", water: "💧", milk: "🥛", juice: "🧃", bread: "🍞",
  rice: "🍚", egg: "🥚", chicken: "🍗", pizza: "🍕", burger: "🍔", salad: "🥗",
  cake: "🍰", apple: "🍎", banana: "🍌", orange: "🍊", grapes: "🍇",
  // مشاعر
  happy: "😄", sad: "😢", angry: "😠", scared: "😨", tired: "😪", excited: "🤩",
  surprised: "😲", bored: "😑", confused: "😕", worried: "😟",
  // مهن وأشخاص
  doctor: "👨‍⚕️", teacher: "👩‍🏫", police: "👮", worker: "👷", chef: "👨‍🍳",
  nurse: "👩‍⚕️", engineer: "👷‍♂️", driver: "🚕", boss: "👔",
  brother: "👦", sister: "👧", mother: "👩", father: "👨", grandmother: "👵",
  // حيوانات
  dog: "🐶", cat: "🐱", bird: "🐦", fish: "🐟", horse: "🐴", cow: "🐮",
  lion: "🦁", elephant: "🐘", rabbit: "🐰",
  // أفعال
  running: "🏃", swimming: "🏊", reading: "📖", cooking: "👨‍🍳", sleeping: "😴",
  eating: "🍽️", dancing: "💃", singing: "🎤", cook: "🍳", eat: "🍴", drink: "🥤",
  sleep: "😴", sit: "🪑", stand: "🧍", watch: "👀", open: "🔓", close: "🔒",
  "wake up": "⏰",
  // أماكن
  beach: "🏖️", mountain: "⛰️", city: "🏙️", park: "🌳", school: "🏫",
  hospital: "🏥", restaurant: "🍽️", market: "🛒", forest: "🌲", sea: "🌊",
  bridge: "🌉", hotel: "🏨", office: "🏢", station: "🚉", store: "🏪",
  bathroom: "🛁", bedroom: "🛏️", kitchen: "🍳", "living room": "🛋️", room: "🚪",
  reception: "🛎️", gate: "🚧", square: "🏛️", bank: "🏦",
  // أشياء
  car: "🚗", bus: "🚌", phone: "📱", computer: "💻", book: "📚", bag: "👜",
  chair: "🪑", table: "🪑", key: "🔑", door: "🚪", clock: "🕐", alarm: "⏰",
  calendar: "📅", paper: "📄", pen: "🖊️", email: "📧", report: "📋", card: "💳",
  bill: "🧾", receipt: "🧾", menu: "📋", ticket: "🎫", passport: "📔", plate: "🍽️",
  cart: "🛒", plane: "✈️",
  // ملابس
  shirt: "👕", jeans: "👖", pants: "👖", dress: "👗", hat: "🎩", shoes: "👟",
  jacket: "🧥", scarf: "🧣",
  // طقس
  sunny: "☀️", rainy: "🌧️", cloudy: "☁️", snowy: "🌨️", windy: "💨", hot: "🥵", cold: "🥶",
  // جسم
  head: "👤", foot: "🦶", tooth: "🦷", stomach: "🫃", hand: "✋",
  // رياضة
  football: "⚽", basketball: "🏀", tennis: "🎾", volleyball: "🏐",
  // مدرسة ومواد
  math: "➗", science: "🔬", history: "📜", art: "🎨",
  // سلامة وإشارات
  fire: "🔥", danger: "⚠️", stop: "🛑", careful: "⚠️", shower: "🚿",
  // ظروف التكرار (رموز معبّرة)
  always: "💯", usually: "🔁", sometimes: "🔂", never: "🚫",
};

function getEmoji(label: string): string {
  return EMOJI_MAP[label.toLowerCase().trim()] ?? "📦";
}

// تصدير القاموس وقائمة الكلمات (لتوليد أسئلة الصور تلقائياً)
export { EMOJI_MAP };
export const PICTURE_WORDS = Object.keys(EMOJI_MAP);
export function hasEmoji(label: string): boolean {
  return !!EMOJI_MAP[label.toLowerCase().trim()];
}
export function emojiFor(label: string): string {
  return getEmoji(label);
}

export function DrinkArt({ label }: { label: string }): ReactElement {
  const emoji = getEmoji(label);
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #f8fafc, #eef2f6)",
      borderRadius: "50%", border: "2px solid #e2e8f0",
      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
    }}>
      <span style={{ fontSize: 42, lineHeight: 1, userSelect: "none" }}>{emoji}</span>
    </div>
  );
}
