export default function Newsletter(): JSX.Element {
  return (
    <div id="newsletter" className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h2 className=" sm:text-2xl text-3xl md:text-4xl font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h2>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-between w-full">
              <input
                className="rounded-md p-3 flex w-full text-black"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-[#00df9a] w-[200px] font-medium rounded-md py-3 px-6 text-black ml-4 my-6">
                Notify Me
              </button>
          </div>
          <p className="mt-3">
            We care about the protection of your data. Read our{' '}
            <a href="#" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
