// Two Web3Forms access keys, each tied to a different destination inbox —
// submitting to both delivers a copy of every enquiry to each mailbox.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY ||
  "5d913037-c05b-44c0-be62-4e6c90484247";
const WEB3FORMS_ACCESS_KEY_2 =
  import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY_2 ||
  "8367d08e-9e8b-4b3c-8131-ec3131a16e3f";

const submitToWeb3Forms = async (payload, accessKey) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
};

// Fire both submissions in parallel. Resolves true if AT LEAST ONE
// succeeds, so a hiccup on one inbox doesn't block the user.
export const submitLead = async (payload) => {
  const results = await Promise.allSettled([
    submitToWeb3Forms(payload, WEB3FORMS_ACCESS_KEY),
    submitToWeb3Forms(payload, WEB3FORMS_ACCESS_KEY_2),
  ]);
  return results.some((result) => result.status === "fulfilled");
};
