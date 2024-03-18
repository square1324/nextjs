import variables from "./page.module.scss";

export default function Page() {
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  );
}
