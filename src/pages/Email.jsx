import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMaskLengthSelectors } from "../zustand-stores/masked-length-store";
import "../css/configuration-email.css";

const schema = z.object({
  email: z.string().email(),
});

const Email = () => {
  const maskedLength = useMaskLengthSelectors.use.maskedLength();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "longname@mail.com" },
    resolver: zodResolver(schema),
  });

  const [userEmail, setUserEmail] = useState("");

  const maskEmail = (email) => {
    // Split the email into local part and domain
    const [localPart, domain] = email.split("@");
    let maskedLocalPart = "";

    // Determine how to mask the local part based on its length
    switch (true) {
      case localPart.length > maskedLength:
        // If the local part is longer than maskedLength characters, mask the last maskedLength characters
        maskedLocalPart =
          localPart.slice(0, -maskedLength) + "*".repeat(maskedLength);
        break;
      case localPart.length <= maskedLength:
        // If the local part is shorter than or equal to maskedLength, mask all characters except the first one
        maskedLocalPart = localPart[0] + "*".repeat(localPart.length - 1);
        break;
    }

    return `${maskedLocalPart}@${domain}`;
  };
  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setUserEmail(maskEmail(data.email));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1>Masked Email</h1>
      <div className="form-group">
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          {...register("email")}
          className="input-field"
          type="text"
          placeholder="Email"
        />
        {/* errors */}
        {errors.email && (
          <div className="error-message">{errors.email.message}</div>
        )}

        <button disabled={isSubmitting} type="submit" className="button">
          {isSubmitting ? "Loading..." : "Mask"}
        </button>
        <div className="user-email">{userEmail}</div>
      </div>
    </form>
  );
};

export default Email;
