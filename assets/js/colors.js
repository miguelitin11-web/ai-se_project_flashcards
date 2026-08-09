const colorMap = {
  green: "#64d583",
  blue: "#91a8f9",
  orange: "#ee955e",
  pink: "#ee92d7",
  purple: "#aa8ef0",
  yellow: "#f5d770",
  default: "#64d583",
};

function hexToString(color) {
  return (
    Object.keys(colorMap).find((colorName) => colorMap[colorName] === color) ||
    "default"
  );
}

function removeColorClasses(element) {
  [...element.classList].forEach((className) => {
    if (className.includes("card__carousel_color_")) {
      element.classList.remove(className);
    }
  });
}

export function getColorName(color) {
  return (
    Object.keys(colorMap).find((colorName) => colorMap[colorName] === color) ||
    "default"
  );
}

export { colorMap, hexToString, removeColorClasses };
