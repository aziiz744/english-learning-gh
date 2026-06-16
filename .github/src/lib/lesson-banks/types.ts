// Shared types for the tiered lesson question banks.
// Each lesson defines 4 DISTINCT, non-overlapping tiers so that every star
// attempt and the challenge test show completely different questions, with
// difficulty rising from t0 → t3.
//
//   t0 = 1st star            EASY    — recognition, short sentences, core vocab
//   t1 = 2nd star            MEDIUM  — questions, negation, longer sentences
//   t2 = 3rd star            HARD    — complex structures, trap distractors
//   t3 = challenge / test    HIGH    — exam-level, integrative, subtle nuance
//
// Authoring rules (keep banks consistent across all CEFR files):
//   • Every tier has >= 10 items (more is fine — gives variety on replays).
//   • Every tier mixes types: at least 1 listen_select + 1 picture_match,
//     the rest word_order / translate.
//   • For translate / listen_select / picture_match the correctAnswer MUST be
//     present among options / pictureOptions labels.
//   • All items must stay tied to the lesson's objective/topic.
//   • IDs follow `<slug>-t<tier>-<n>` and must be globally unique.

export type ExObj = {
  id: string;
  type: "word_order" | "translate" | "listen_select" | "picture_match" | "fill_blank" | "matching";
  sentence?: string;
  arabic?: string;
  options?: string[];
  listenSentence?: string;
  word?: string;
  pictureOptions?: { emoji: string; label: string }[];
  // fill_blank: جملة فيها ___ + خيارات لملء الفراغ
  blankSentence?: string;       // مثل: "Tea ___ ."
  blankOptions?: string[];      // مثل: ["with", "sugar"]
  // matching: أزواج إنجليزي↔عربي
  pairs?: { en: string; ar: string }[];
  correctAnswer: string;
  explanation: string;
  xp: number;
};

export type TieredBank = {
  t0: ExObj[];
  t1: ExObj[];
  t2: ExObj[];
  t3: ExObj[];
};
