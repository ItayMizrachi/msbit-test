import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMaskLengthSelectors } from "../zustand-stores/masked-length-store";
import { usePacmanSpeedSelectors } from "../zustand-stores/pacman-speed";
import { useMatrixLengthSelectors } from "../zustand-stores/matrix-length";
import "../css/configuration-email.css";

const schema = z.object({
  emailLength: z.coerce.number().min(1),
  matrixCol: z.coerce.number().min(1),
  matrixRow: z.coerce.number().min(1),
  pacmanS: z.coerce.number().min(1),
});

const Configuration = () => {
  const setMaskedLength = useMaskLengthSelectors.use.setMaskedLength();
  const setPacmanSpeed = usePacmanSpeedSelectors.use.setPacmanSpeed();
  const setmatrixColLength = useMatrixLengthSelectors.use.setmatrixColLength();
  const setmatrixRowLength = useMatrixLengthSelectors.use.setmatrixRowLength();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: { emailLength: 4, matrixCol: 9, matrixRow: 9, pacmanS: 2 },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setMaskedLength(data.emailLength);
      setmatrixColLength(data.matrixCol);
      setmatrixRowLength(data.matrixRow);
      setPacmanSpeed(data.pacmanS);
      console.table(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1>Configuration</h1>
      <div className="form-group">
        <label htmlFor="emailLength" className="label">
          Email mask length
        </label>
        <input
          {...register("emailLength")}
          className="input-field"
          type="text"
          placeholder="email masked length"
        />
        {errors.emailLength && (
          <div className="error-message">{errors.emailLength.message}</div>
        )}
        <label htmlFor="matrixCol" className="label">
          Matrix columns length
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
          Matrix rows length
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

        <button disabled={isSubmitting} type="submit" className="button">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {isSubmitted && <p className="submitted">Submitted!</p>}
      </div>
    </form>
  );
};

export default Configuration;
