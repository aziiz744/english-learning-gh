import { useState, useRef, useEffect } from "react";
import { translate, isEnglishText } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipState {
  word: string;
  translation: string;
  x: number;
  y: number;
}

function WordTooltip({ word, translation, x, y, onClose }: TooltipState & { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 6 }}
      transition={{ duration: 0.15 }}
      style={{ position: "fixed", left: x, top: y, zIndex: 9999 }}
      className="pointer-events-auto"
    >
      <div className="bg-popover border border-border rounded-xl shadow-xl px-3 py-2 text-right min-w-[120px] max-w-[200px]">
        <div className="text-[10px] text-muted-foreground mb-0.5 font-mono ltr">{word}</div>
        <div className="text-sm font-bold text-foreground leading-tight">{translation}</div>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-popover border-l border-t border-border rotate-45" />
      </div>
    </motion.div>
  );
}

interface WordHighlighterProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

export function WordHighlighter({ text, className, disabled }: WordHighlighterProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const tokens = text.split(/(\s+|[^\w']+)/);

  function handleWordClick(e: React.MouseEvent, word: string) {
    if (disabled) return;
    const translation = translate(word);
    if (!translation) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const tooltipX = Math.min(rect.left + rect.width / 2 - 60, window.innerWidth - 220);
    const tooltipY = rect.top - 70;
    setTooltip({ word: word.toLowerCase(), translation, x: tooltipX, y: tooltipY });
  }

  return (
    <span className={cn("inline", className)}>
      {tokens.map((token, i) => {
        const isWord = /^[a-zA-Z']+$/.test(token);
        if (!isWord) return <span key={i}>{token}</span>;

        if (disabled) return <span key={i}>{token}</span>;

        const translation = translate(token);
        if (!translation) return <span key={i}>{token}</span>;

        return (
          <span
            key={i}
            onClick={(e) => handleWordClick(e, token)}
            className={cn(
              "cursor-pointer relative",
              "decoration-dotted underline underline-offset-[3px]",
              "decoration-primary/50 hover:decoration-primary",
              "hover:text-primary transition-colors duration-150",
            )}
            style={{ textDecorationStyle: "dotted", textDecorationLine: "underline" }}
            title={translation}
          >
            {token}
          </span>
        );
      })}

      <AnimatePresence>
        {tooltip && (
          <WordTooltip {...tooltip} onClose={() => setTooltip(null)} />
        )}
      </AnimatePresence>
    </span>
  );
}

interface QuestionTextProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

export function QuestionText({ text, className, disabled }: QuestionTextProps) {
  const english = isEnglishText(text);

  return (
    <span
      dir={english ? "ltr" : "rtl"}
      className={cn(
        "block leading-relaxed",
        english ? "text-left" : "text-right",
        className
      )}
    >
      {english ? <WordHighlighter text={text} disabled={disabled} /> : text}
    </span>
  );
}

interface OptionTextProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

export function OptionText({ text, className, disabled }: OptionTextProps) {
  const english = isEnglishText(text);
  return (
    <span
      dir={english ? "ltr" : "rtl"}
      className={cn(
        "flex-1 block",
        english ? "text-left" : "text-right",
        className
      )}
    >
      {english ? <WordHighlighter text={text} disabled={disabled} /> : text}
    </span>
  );
}
