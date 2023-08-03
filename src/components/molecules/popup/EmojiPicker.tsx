import clsx from "clsx";
import { Categories, EmojiStyle } from "emoji-picker-react";
import dynamic from "next/dynamic";
import React from "react";

const ReactEmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

interface EmojiPickerProps {
  visible?: boolean;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onClose, visible }) => {
  if (!visible) return null;

  return (
    <div
      className={clsx(
        "z-[9999] bg-white shadow-[0px_0px_16px_0px_rgba(0, 0, 0, 0.16)] rounded-lg fixed left-[370px] bottom-[88px] transition-all"
      )}
    >
      <ReactEmojiPicker
        emojiStyle={EmojiStyle.GOOGLE}
        searchPlaceHolder="Cari emoji"
        previewConfig={{ showPreview: false }}
        height={300}
        categories={[
          { category: Categories.SUGGESTED, name: "Terakhir Digunakan" },
          { category: Categories.SMILEYS_PEOPLE, name: "Smileys & People" },
          { category: Categories.ANIMALS_NATURE, name: "Animals & Nature" },
          { category: Categories.FOOD_DRINK, name: "Food & Drink" },
          { category: Categories.TRAVEL_PLACES, name: "Travel & Places" },
          { category: Categories.ACTIVITIES, name: "Activities" },
          { category: Categories.OBJECTS, name: "Objects" },
          { category: Categories.SYMBOLS, name: "Symbols" },
          { category: Categories.FLAGS, name: "Flags" },
        ]}
      />
    </div>
  );
};

export default EmojiPicker;
