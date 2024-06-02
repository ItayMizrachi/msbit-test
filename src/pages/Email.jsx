import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import "../css/configuration-email.css";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
});

const Email = () => {
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
      case localPart.length > 4:
        // If the local part is longer than 4 characters, mask the last 4 characters
        maskedLocalPart = localPart.slice(0, -4) + "****";
        break;
      case localPart.length === 4:
        // If the local part is exactly 4 characters, mask the last 3 characters
        maskedLocalPart = localPart[0] + "***";
        break;
      case localPart.length === 3:
        maskedLocalPart = localPart[0] + "**";
        break;
      case localPart.length === 2:
        maskedLocalPart = localPart[0] + "*";
        break;
      case localPart.length === 1:
        // If the local part is 1 character, mask the character completely
        maskedLocalPart = "*";
        break;
      default:
        maskedLocalPart = localPart;
    }

    // Return the masked email address
    return `${maskedLocalPart}@${domain}`;
  };
  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      console.log(data);
      setUserEmail(maskEmail(data.email));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-group">
        <label htmlFor="email" className="label">
          Email
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
