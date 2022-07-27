import React from "react";
import { Formik, FastField, Form } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { usersChoice } from "../store/todoSlice";
const FormSection = () => {
  const dispatch = useDispatch();
  const onSubmit = (value, { resetForm }) => {
    dispatch(usersChoice(value));
    resetForm();
  };
  const validationSchema = Yup.object().shape({
    country: Yup.string()
      .required("The field is required")
      .matches(/[A-Za-zА]/, "only letters"),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={{ country: "" }}
        className="form__conteiner"
      >
        <Form className="form">
          <h1 className="form__title">
            Введитите название страни для поиска университета
          </h1>

          <FastField name="country">
            {({ field, meta }) => {
              return (
                <TextField
                  error={meta.error && meta.touched ? true : false}
                  variant="standard"
                  name="country"
                  className={`form__input ${
                    meta.error && meta.touched ? "form__input-error" : null
                  } `}
                  helperText={meta.error && meta.touched ? meta.error : ""}
                  label="country"
                  {...field}
                />
              );
            }}
          </FastField>
          <Button text="отправить" type="submmit" />
          <Button text="очистить" type="reset" />
        </Form>
      </Formik>
    </div>
  );
};

export default FormSection;
