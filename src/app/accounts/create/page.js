export default function AccountCreate() {
  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="text-gray-700 font-bold text-center">
            Create new Account to use
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            id="name"
            type="text"
            placeholder="Account Name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="balance"
          >
            Opening Balance
          </label>

          <div className="relative">
            <input
              step="any"
              min="0.00"
              id="balance"
              name="inline-add-on"
              className="focus:outline-none border rounded w-full py-2 px-4 text-gray-700"
              placeholder="Opening Balance"
            />

            <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 px-2 border">
              <label
                htmlFor="hs-inline-leading-select-currency"
                className="sr-only"
              >
                Currency
              </label>
              <select
                id="hs-inline-leading-select-currency"
                name="hs-inline-leading-select-currency"
                className="block w-full border-transparent rounded-lg focus:outline-none"
              >
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
