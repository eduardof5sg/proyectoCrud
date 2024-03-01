
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const Contacto = () => {
  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'El nombre es requerido';
    }

    if (!values.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Introduce un correo electrónico válido';
    }

    if (!values.feedback) {
      errors.feedback = 'El comentario es requerido';
    }

    return errors;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Formik
        initialValues={{
          name: '',
          email: '',
          feedback: '',
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true); // Establece el estado de envío en true antes de validar

          // Realiza las validaciones
          const errors = validate(values);

          if (Object.keys(errors).length === 0) {
            // Si no hay errores, redirige al usuario
            window.location.href = "/";
          }

          setSubmitting(false); // Restablece el estado de envío después de las validaciones
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="container">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Nombre</label>
              <Field className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" type="text" name="name" placeholder="Introduce tu nombre" />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email:</label>
              <Field className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" type="email" name="email" placeholder="Introduce tu E-mail" />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="feedback">Comentario:</label>
              <Field className={`form-control ${errors.feedback ? 'is-invalid' : ''}`} id="feedback" as="textarea" name="feedback" rows="5" placeholder="Introduce tu comentario" />
              <ErrorMessage name="feedback" component="div" className="invalid-feedback" />
            </div>
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contacto;








