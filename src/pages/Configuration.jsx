import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import "../css/configuration-email.css";

const schema = z.object({
  email: z.string().email(),
  matrixCol: z.coerce.number(),
  matrixRow: z.coerce.number(),
  pacmanS: z.coerce.number(),
});

const Configuration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "4", matrixCol: 9, matrixRow: 9, pacmanS: 2 },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      console.table(data);
    } catch (error) {
      setError("root", { message: "This email is already taken" });
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
        {errors.email && (
          <div className="error-message">{errors.email.message}</div>
        )}
        <label htmlFor="matrixCol" className="label">
          matrix columns length
        </label>
        <input
          {...register("matrixCol")}
          className="input-field"
          type="number"
          placeholder="matrix columns length"
        />
        {errors.matrixCol && (
          <div className="error-message">{errors.matrixCol.message}</div>
        )}
        <label htmlFor="matrixRow" className="label">
          matrix rows length
        </label>
        <input
          {...register("matrixRow")}
          className="input-field"
          type="number"
          placeholder="matrix rows length"
        />
        {errors.matrixRow && (
          <div className="error-message">{errors.matrixRow.message}</div>
        )}

        <label htmlFor="pacmanS" className="label">
          Pacman animation speed
        </label>
        <input
          {...register("pacmanS")}
          className="input-field"
          type="number"
          placeholder="Pacman animation speed"
        />
        {errors.pacmanS && (
          <div className="error-message">{errors.pacmanS.message}</div>
        )}

        {/* errors */}
        {errors.root && (
          <div className="error-message">{errors.root.message}</div>
        )}
        <button disabled={isSubmitting} type="submit" className="button">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Configuration;
