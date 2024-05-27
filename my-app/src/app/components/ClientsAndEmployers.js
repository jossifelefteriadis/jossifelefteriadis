export default function ClientsAndEmployers() {
  return (
    <section className="w-1/6 flex flex-col items-center">
      <h2 className="w-full text-xl mb-6">Client and Employers</h2>
      <p className="w-full flex flex-col mb-6">
        <span>Developer Relations at t3rn</span>
        <a
          href="https://www.t3rn.io/"
          target="_blank"
          className="w-fit underline underline-offset-2"
        >
          t3rn.io
        </a>
      </p>
      <p className="w-full flex flex-col mb-6">
        <span>Developer Advocate at Moralis</span>
        <a
          href="https://moralis.io/"
          target="_blank"
          className="w-fit underline underline-offset-2"
        >
          moralis.io
        </a>
      </p>
      <p className="w-full flex flex-col mb-6">
        <span>Software Developer at Bonnier News</span>
        <a
          href="https://www.bonniernews.se/"
          target="_blank"
          className="w-fit underline underline-offset-2"
        >
          bonniernews.se
        </a>
      </p>
      <p className="w-full flex flex-col mb-6">
        <span>Software Developer at SALT</span>
        <a
          href="https://salt.dev/"
          target="_blank"
          className="w-fit underline underline-offset-2"
        >
          salt.dev
        </a>
      </p>
    </section>
  );
}
