import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntries } from "../API";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const EntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleSubmit, register } = useForm();
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      values.latitude = location.latitude;
      values.longitude = location.longitude;
      const created = await createLogEntries(values);
      onClose();
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="entryLog">
        {error ? <div className="ERROR"></div> : null}

        <input name="title" required ref={register} placeholder="Title" />

        <textarea
          name="description"
          rows={3}
          ref={register}
          placeholder="Description"
        ></textarea>
        <input name="image" ref={register} placeholder="Image URL" />

        <input
          name="visitDate"
          type="date"
          required
          ref={register}
          placeholder="Visit Date"
        />
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          type="submit"
        >
          {loading ? "loading" : "Create Entry"}
        </Button>
      </form>
    </>
  );
};

export default EntryForm;
