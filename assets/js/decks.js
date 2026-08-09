const decks = [
  {
    id: "html-basics",
    name: "HTML Basics",
    description: "Core HTML tags and concepts",
    cards: [
      {
        id: 1,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "What tag creates the largest heading on a page?",
        answer: "<h1>",
      },
      {
        id: 3,
        question: "What tag is used to create a paragraph?",
        answer: "<p>",
      },
      {
        id: 4,
        question: "What tag creates a hyperlink?",
        answer: "<a>",
      },
      {
        id: 5,
        question: "What attribute is required on every <img> tag?",
        answer: "alt — it provides alternative text describing the image",
      },
      {
        id: 6,
        question: "What tag creates an unordered (bulleted) list?",
        answer: "<ul>",
      },
      {
        id: 7,
        question: "What tag creates an ordered (numbered) list?",
        answer: "<ol>",
      },
      {
        id: 8,
        question: "What tag contains a single item in a list?",
        answer: "<li>",
      },
      {
        id: 9,
        question: "What attribute makes a link open in a new tab?",
        answer: 'target="_blank"',
      },
      {
        id: 10,
        question: "What is the root element of every HTML page?",
        answer: "<html>",
      },
    ],
    color: "#64d583",
  },
  {
    id: "html-semantic",
    name: "Semantic HTML",
    description: "Meaningful HTML elements for structure and accessibility",
    cards: [
      {
        id: 11,
        question: "What semantic tag represents the top section of a page?",
        answer: "<header>",
      },
      {
        id: 12,
        question: "What semantic tag wraps the main navigation links?",
        answer: "<nav>",
      },
      {
        id: 13,
        question: "What semantic tag represents the primary content of a page?",
        answer: "<main>",
      },
      {
        id: 14,
        question:
          "What semantic tag represents a standalone piece of content, like a blog post?",
        answer: "<article>",
      },
      {
        id: 15,
        question:
          "What semantic tag represents a thematic grouping of content?",
        answer: "<section>",
      },
      {
        id: 16,
        question:
          "What semantic tag represents content tangentially related to the main content (e.g., a sidebar)?",
        answer: "<aside>",
      },
      {
        id: 17,
        question:
          "What semantic tag represents the bottom of a page or section?",
        answer: "<footer>",
      },
      {
        id: 18,
        question:
          "What is a key benefit of using semantic HTML over generic <div> tags?",
        answer:
          "It improves accessibility, SEO, and makes the code easier to read",
      },
      {
        id: 19,
        question:
          "What non-semantic tag is commonly used as a generic container?",
        answer: "<div>",
      },
      {
        id: 20,
        question:
          "What non-semantic inline tag is used to style or group inline content?",
        answer: "<span>",
      },
    ],
    color: "#91a8f9",
  },
  {
    id: "css-fundamentals",
    name: "CSS Fundamentals",
    description: "Selectors, properties, and the cascade",
    cards: [
      {
        id: 21,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        id: 22,
        question: "What are the three parts of a CSS rule?",
        answer: "Selector, property, and value",
      },
      {
        id: 23,
        question: "How do you select an element by its class in CSS?",
        answer: "Use a dot followed by the class name — e.g., .classname",
      },
      {
        id: 24,
        question: "How do you select an element by its ID in CSS?",
        answer: "Use a hash followed by the ID — e.g., #idname",
      },
      {
        id: 25,
        question: "What CSS property changes text color?",
        answer: "color",
      },
      {
        id: 26,
        question: "What CSS property sets the background color?",
        answer: "background-color",
      },
      {
        id: 27,
        question: "What CSS property controls the size of text?",
        answer: "font-size",
      },
      {
        id: 28,
        question: "What does display: none do to an element?",
        answer:
          "Hides the element completely and removes it from the document flow",
      },
      {
        id: 29,
        question:
          "In the cascade, which selector takes priority: a class or an element selector?",
        answer: "A class selector — it has higher specificity",
      },
      {
        id: 30,
        question: "What does the * selector match?",
        answer: "Every element on the page (the universal selector)",
      },
    ],
    color: "#ee955e",
  },
  {
    id: "css-box-model",
    name: "CSS Box Model",
    description: "Content, padding, border, and margin",
    cards: [
      {
        id: 31,
        question:
          "What are the four parts of the CSS box model, from inside out?",
        answer: "Content, padding, border, margin",
      },
      {
        id: 32,
        question:
          "What CSS property controls the space between the content and the border?",
        answer: "padding",
      },
      {
        id: 33,
        question:
          "What CSS property controls the space outside the border, between elements?",
        answer: "margin",
      },
      {
        id: 34,
        question:
          "What value of box-sizing includes padding and border in an element's total width and height?",
        answer: "border-box",
      },
      {
        id: 35,
        question: "What is the default value of box-sizing?",
        answer: "content-box",
      },
      {
        id: 36,
        question:
          "What shorthand sets top, right, bottom, and left padding in one declaration?",
        answer:
          "padding: top right bottom left — e.g., padding: 10px 20px 10px 20px",
      },
      {
        id: 37,
        question: "What does margin: auto do when applied to a block element?",
        answer: "Centers the element horizontally within its container",
      },
      {
        id: 38,
        question: "What does overflow: hidden do?",
        answer: "Clips any content that extends beyond the element's box",
      },
      {
        id: 39,
        question:
          "What shorthand declaration adds a 1px solid black border on all sides?",
        answer: "border: 1px solid black",
      },
      {
        id: 40,
        question: "What CSS property sets the maximum width of an element?",
        answer: "max-width",
      },
    ],
    color: "#ee92d7",
  },
  {
    id: "css-flexbox",
    name: "CSS Flexbox",
    description: "Flexible layout with Flexbox",
    cards: [
      {
        id: 41,
        question: "What declaration enables Flexbox on a container?",
        answer: "display: flex",
      },
      {
        id: 42,
        question:
          "What property controls whether flex items are arranged in a row or column?",
        answer: "flex-direction",
      },
      {
        id: 43,
        question: "What property aligns flex items along the main axis?",
        answer: "justify-content",
      },
      {
        id: 44,
        question: "What property aligns flex items along the cross axis?",
        answer: "align-items",
      },
      {
        id: 45,
        question: "What is the default value of flex-direction?",
        answer: "row",
      },
      {
        id: 46,
        question:
          "What value of justify-content places equal space between items but none on the edges?",
        answer: "space-between",
      },
      {
        id: 47,
        question:
          "What value of justify-content and align-items centers items?",
        answer: "center",
      },
      {
        id: 48,
        question:
          "What property allows flex items to wrap onto multiple lines?",
        answer: "flex-wrap",
      },
      {
        id: 49,
        question:
          "What property controls how much a flex item grows relative to its siblings?",
        answer: "flex-grow",
      },
      {
        id: 50,
        question: "What CSS property sets the gap between flex items?",
        answer: "gap",
      },
    ],
    color: "#aa8ef0",
  },
  {
    id: "js-basics",
    name: "JavaScript Basics",
    description: "Variables, types, and operators",
    cards: [
      {
        id: 51,
        question:
          "What keyword declares a variable that can be reassigned later?",
        answer: "let",
      },
      {
        id: 52,
        question: "What keyword declares a variable that cannot be reassigned?",
        answer: "const",
      },
      {
        id: 53,
        question: "Name three primitive data types in JavaScript.",
        answer:
          "string, number, and boolean (also: null, undefined, symbol, bigint)",
      },
      {
        id: 54,
        question: "What does typeof return when called on a string?",
        answer: '"string"',
      },
      {
        id: 55,
        question: "What is the difference between == and === in JavaScript?",
        answer:
          "== checks value only (loose equality); === checks both value and type (strict equality)",
      },
      {
        id: 56,
        question: 'What is the result of 5 + "3" in JavaScript?',
        answer: '"53" — the number is coerced to a string and concatenated',
      },
      {
        id: 57,
        question: "What does console.log() do?",
        answer: "Prints a value to the browser developer console",
      },
      {
        id: 58,
        question: "How do you write a single-line comment in JavaScript?",
        answer: "// followed by the comment text",
      },
      {
        id: 59,
        question: "What does the ! operator do?",
        answer: "Negates a boolean value (logical NOT): !true === false",
      },
      {
        id: 60,
        question: "What values are falsy in JavaScript?",
        answer: "false, 0, '' (empty string), null, undefined, and NaN",
      },
    ],
    color: "#f5d770",
  },
  {
    id: "js-functions",
    name: "JavaScript Functions",
    description: "Declaring, calling, and passing functions",
    cards: [
      {
        id: 61,
        question: "What keyword declares a traditional named function?",
        answer: "function",
      },
      {
        id: 62,
        question: "What is a parameter?",
        answer:
          "A named variable in the function definition that receives a value when the function is called",
      },
      {
        id: 63,
        question: "What is an argument?",
        answer: "The actual value passed to a function when it is called",
      },
      {
        id: 64,
        question: "What does the return keyword do?",
        answer: "Stops function execution and sends a value back to the caller",
      },
      {
        id: 65,
        question: "What is a function expression?",
        answer:
          "A function created and assigned to a variable, often without a name",
      },
      {
        id: 66,
        question: "What does invoking a function mean?",
        answer: "Calling the function so its code runs",
      },
      {
        id: 67,
        question: "What is the difference between a parameter and an argument?",
        answer:
          "A parameter is a placeholder in the declaration; an argument is the value passed when called",
      },
      {
        id: 68,
        question: "What is a callback function?",
        answer: "A function passed into another function to be called later",
      },
      {
        id: 69,
        question: "What is an arrow function?",
        answer: "A concise syntax for writing a function expression",
      },
      {
        id: 70,
        question:
          "What does a function return by default if no return statement is present?",
        answer: "undefined",
      },
    ],
    color: "#64d583",
  },
];

export default decks;
