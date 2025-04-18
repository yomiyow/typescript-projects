const BasicInfo = () => {
  return (
    <fieldset className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 w-full max-w-md p-4 rounded">
      <h1 className="text-xl mb-2">Basic Details</h1>

      <label htmlFor="name">
        1. Name
        <input
          className="block input input-sm w-full text-base-content"
          type="text"
          name="name"
          id="name"
          required
        />
      </label>

      <label htmlFor="email">
        2. Email
        <input
          className="block input input-sm w-full text-base-content"
          type="email"
          name="email"
          id="email"
          required
        />
      </label>

      <label htmlFor="name">
        3. Contact No.
        <input
          className="block input input-sm w-full text-base-content"
          type="text"
          name="name"
          id="name"
          required
        />
      </label>
    </fieldset>
  );
}

export default BasicInfo;