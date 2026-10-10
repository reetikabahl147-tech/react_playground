// JSX looks like HTML but it is JavaScript. It compiles to function calls.

// Simple component

export default function JSX_Example() {
  const name = "Reetika";
  return (
    <>
      <h2>Hello {name}!</h2>
      <h3>This is a JSX example.</h3>
      <div> Rules for JSX:</div>
      <ol>
        <li> JSX must have a single parent element.</li>
        <li> Use className instead of class for CSS classes.</li>
        <li> Use camelCase for event handlers (e.g., onClick).</li>
        <li>
          {" "}
          Self-closing tags must end with a slash (e.g., <img />
          ).
        </li>
        <li> JavaScript expressions can be used within curly braces {}.</li>
        <li>
          {" "}
          Component names start with a capital letter (JSX_Example). Lowercase
          means a plain HTML tag.
        </li>
      </ol>
      <span> Note - Check more on your notes!</span>
    </>
  );
}
