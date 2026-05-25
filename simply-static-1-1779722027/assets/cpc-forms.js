(function () {
  'use strict';

  var RESERVA_FIELDS = [
    { name: 'your-name', key: 'name', message: 'Ingrese su nombre y apellido.', email: false },
    { name: 'your-email', key: 'email', message: 'Ingrese su e-mail.', email: true },
    { name: 'tel-196', key: 'phone', message: 'Ingrese su teléfono.', email: false },
    { name: 'Salon-a-Reservar', key: 'salon', message: 'Seleccione un espacio a reservar.', email: false },
    { name: 'Fecha-Reserva', key: 'date', message: 'Seleccione la fecha de reserva.', email: false },
    { name: 'Hora-Reserva', key: 'time', message: 'Indique el horario de la reserva.', email: false },
  ];

  var CONTACT_FIELDS = [
    { name: 'your-name', key: 'name', message: 'Ingrese su nombre y apellido.', email: false },
    { name: 'your-email', key: 'email', message: 'Ingrese su e-mail.', email: true },
    { name: 'your-message', key: 'message', message: 'Ingrese su mensaje.', email: false },
  ];

  var SERVER_FIELD_MAP = {
    reserva: {
      name: 'your-name',
      email: 'your-email',
      phone: 'tel-196',
      salon: 'Salon-a-Reservar',
      date: 'Fecha-Reserva',
      time: 'Hora-Reserva',
    },
    contact: {
      name: 'your-name',
      email: 'your-email',
      message: 'your-message',
    },
  };

  function getFormKind() {
    if (window.location.pathname.indexOf('/reservas') !== -1) {
      return 'reserva';
    }
    if (window.location.pathname.indexOf('/contactenos') !== -1) {
      return 'contact';
    }
    return null;
  }

  function setOutput(form, message, isError) {
    var output = form.querySelector('.wpcf7-response-output, .mc4wp-response');
    if (!output) {
      return;
    }
    output.textContent = message;
    output.setAttribute('aria-hidden', 'false');
    output.classList.remove('wpcf7-validation-errors', 'wpcf7-mail-sent-ok', 'mc4wp-error', 'mc4wp-success');
    if (isError) {
      output.classList.add(form.classList.contains('mc4wp-form') ? 'mc4wp-error' : 'wpcf7-validation-errors');
    } else {
      output.classList.add(form.classList.contains('mc4wp-form') ? 'mc4wp-success' : 'wpcf7-mail-sent-ok');
    }
  }

  function setLoading(form, loading) {
    var submit = form.querySelector('[type="submit"]');
    if (!submit) {
      return;
    }
    submit.disabled = loading;
    if (loading) {
      submit.dataset.originalValue = submit.value;
      submit.value = 'Enviando...';
    } else if (submit.dataset.originalValue) {
      submit.value = submit.dataset.originalValue;
    }
  }

  function clearFieldError(wrap) {
    if (!wrap) {
      return;
    }
    var control = wrap.querySelector('.wpcf7-form-control, #cpc-captcha-answer');
    if (control) {
      control.classList.remove('wpcf7-not-valid');
      control.setAttribute('aria-invalid', 'false');
    }
    wrap.querySelectorAll('.wpcf7-not-valid-tip').forEach(function (tip) {
      tip.remove();
    });
  }

  function clearFormErrors(form) {
    form.querySelectorAll('.wpcf7-form-control-wrap, .cpc-captcha-wrap').forEach(clearFieldError);
  }

  function showFieldError(wrap, message) {
    if (!wrap) {
      return;
    }
    clearFieldError(wrap);
    var control = wrap.querySelector('.wpcf7-form-control, #cpc-captcha-answer');
    if (control) {
      control.classList.add('wpcf7-not-valid');
      control.setAttribute('aria-invalid', 'true');
    }
    var tip = document.createElement('span');
    tip.className = 'wpcf7-not-valid-tip';
    tip.setAttribute('role', 'alert');
    tip.textContent = message;
    wrap.appendChild(tip);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function fieldValue(form, fieldName) {
    var control = form.querySelector('[name="' + fieldName + '"]');
    return control ? String(control.value || '').trim() : '';
  }

  function validateForm(form, fields, withCaptcha) {
    var errors = [];

    fields.forEach(function (field) {
      var value = fieldValue(form, field.name);
      var wrap = form.querySelector('.wpcf7-form-control-wrap[data-name="' + field.name + '"]');
      if (!value) {
        errors.push({ wrap: wrap, message: field.message, key: field.key });
        return;
      }
      if (field.email && !isValidEmail(value)) {
        errors.push({ wrap: wrap, message: 'Ingrese un e-mail válido.', key: field.key });
      }
    });

    if (withCaptcha) {
      var captchaAnswer = form.querySelector('#cpc-captcha-answer');
      var captchaWrap = form.querySelector('.cpc-captcha-wrap');
      if (captchaAnswer && !String(captchaAnswer.value || '').trim()) {
        errors.push({
          wrap: captchaWrap,
          message: 'Resuelva la suma de verificación.',
          key: 'captcha',
        });
      }
    }

    return errors;
  }

  function applyFieldErrors(errors) {
    errors.forEach(function (error) {
      showFieldError(error.wrap, error.message);
    });
    if (errors.length && errors[0].wrap) {
      var focusTarget = errors[0].wrap.querySelector('.wpcf7-form-control, #cpc-captcha-answer');
      if (focusTarget) {
        focusTarget.focus();
      }
      errors[0].wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  async function getJson(url) {
    var response = await fetch(url, { method: 'GET' });
    return response.json().catch(function () {
      return { success: false };
    });
  }

  async function postJson(url, payload) {
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    var data = await response.json().catch(function () {
      return { success: false, message: 'Error inesperado.' };
    });
    if (!response.ok && data.success !== false) {
      data.success = false;
      data.message = data.message || 'Error inesperado.';
    }
    return data;
  }

  async function loadCaptcha(form, url) {
    var questionEl = form.querySelector('#cpc-captcha-question');
    var tokenEl = form.querySelector('#cpc-captcha-token');
    var answerEl = form.querySelector('#cpc-captcha-answer');
    if (!questionEl || !tokenEl) {
      return;
    }

    questionEl.textContent = 'Cargando verificación...';
    tokenEl.value = '';
    if (answerEl) {
      answerEl.value = '';
    }

    try {
      var data = await getJson(url);
      if (!data.success) {
        questionEl.textContent = 'No se pudo cargar la verificación. Recargue la página.';
        return;
      }
      questionEl.textContent = data.question;
      tokenEl.value = data.token;
    } catch (error) {
      questionEl.textContent = 'No se pudo cargar la verificación. Recargue la página.';
    }
  }

  function bindFieldValidation(form, fields) {
    fields.forEach(function (field) {
      var control = form.querySelector('[name="' + field.name + '"]');
      if (!control) {
        return;
      }
      var wrapSelector = '.wpcf7-form-control-wrap[data-name="' + field.name + '"]';
      control.addEventListener('input', function () {
        clearFieldError(form.querySelector(wrapSelector));
      });
      control.addEventListener('change', function () {
        clearFieldError(form.querySelector(wrapSelector));
      });
    });

    var captchaAnswer = form.querySelector('#cpc-captcha-answer');
    if (captchaAnswer) {
      captchaAnswer.addEventListener('input', function () {
        clearFieldError(form.querySelector('.cpc-captcha-wrap'));
      });
    }
  }

  function applyServerFieldErrors(form, kind, fields) {
    if (!fields) {
      return;
    }
    var map = SERVER_FIELD_MAP[kind] || {};
    Object.keys(fields).forEach(function (key) {
      if (key === 'captcha') {
        showFieldError(form.querySelector('.cpc-captcha-wrap'), fields[key]);
        return;
      }
      var fieldName = map[key];
      if (!fieldName) {
        return;
      }
      showFieldError(
        form.querySelector('.wpcf7-form-control-wrap[data-name="' + fieldName + '"]'),
        fields[key],
      );
    });
  }

  function bindContactForms() {
    document.querySelectorAll('form.wpcf7-form').forEach(function (form) {
      if (form.dataset.cpcBound === '1') {
        return;
      }
      form.dataset.cpcBound = '1';

      var kind = getFormKind();
      if (!kind) {
        return;
      }

      var isReserva = kind === 'reserva';
      var endpoint = isReserva ? '/api/reservas' : '/api/contact';
      var captchaUrl = isReserva ? '/api/reservas/captcha' : '/api/contact/captcha';
      var fields = isReserva ? RESERVA_FIELDS : CONTACT_FIELDS;

      bindFieldValidation(form, fields);
      loadCaptcha(form, captchaUrl);

      if (isReserva) {
        var dateInput = form.querySelector('[name="Fecha-Reserva"]');
        if (dateInput) {
          dateInput.min = new Date().toISOString().slice(0, 10);
        }
      }

      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        clearFormErrors(form);

        var validationErrors = validateForm(form, fields, true);
        if (validationErrors.length) {
          applyFieldErrors(validationErrors);
          setOutput(form, 'Revise los campos obligatorios marcados con *.', true);
          return;
        }

        setLoading(form, true);

        try {
          var payload;
          if (isReserva) {
            payload = {
              name: fieldValue(form, 'your-name'),
              email: fieldValue(form, 'your-email'),
              phone: fieldValue(form, 'tel-196'),
              salon: fieldValue(form, 'Salon-a-Reservar'),
              date: fieldValue(form, 'Fecha-Reserva'),
              time: fieldValue(form, 'Hora-Reserva'),
              message: fieldValue(form, 'your-message'),
              captchaToken: form.querySelector('#cpc-captcha-token')?.value || '',
              captchaAnswer: form.querySelector('#cpc-captcha-answer')?.value || '',
            };
          } else {
            payload = {
              name: fieldValue(form, 'your-name'),
              email: fieldValue(form, 'your-email'),
              subject: fieldValue(form, 'your-subject'),
              message: fieldValue(form, 'your-message'),
              captchaToken: form.querySelector('#cpc-captcha-token')?.value || '',
              captchaAnswer: form.querySelector('#cpc-captcha-answer')?.value || '',
            };
          }

          var result = await postJson(endpoint, payload);
          if (!result.success) {
            applyServerFieldErrors(form, kind, result.fields);
            if (result.field === 'captcha' || (result.fields && result.fields.captcha)) {
              loadCaptcha(form, captchaUrl);
            }
          }
          setOutput(form, result.message, !result.success);
          if (result.success) {
            form.reset();
            loadCaptcha(form, captchaUrl);
          }
        } catch (error) {
          setOutput(form, 'No se pudo enviar el formulario. Intente más tarde.', true);
        } finally {
          setLoading(form, false);
        }
      }, true);
    });
  }

  function bindNewsletterForms() {
    document.querySelectorAll('form.mc4wp-form').forEach(function (form) {
      if (form.dataset.cpcBound === '1') {
        return;
      }
      form.dataset.cpcBound = '1';

      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setLoading(form, true);

        try {
          var payload = {
            fname: form.querySelector('[name="FNAME"]')?.value || '',
            lname: form.querySelector('[name="LNAME"]')?.value || '',
            phone: form.querySelector('[name="MMERGE7"]')?.value || '',
            memberCategory: form.querySelector('[name="MMERGE5"]')?.value || '',
            email: form.querySelector('[name="EMAIL"]')?.value || '',
            honeypot: form.querySelector('[name="_mc4wp_honeypot"]')?.value || '',
          };

          var result = await postJson('/api/newsletter', payload);
          setOutput(form, result.message, !result.success);
          if (result.success) {
            form.reset();
          }
        } catch (error) {
          setOutput(form, 'No se pudo completar la suscripción. Intente más tarde.', true);
        } finally {
          setLoading(form, false);
        }
      }, true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      bindContactForms();
      bindNewsletterForms();
    });
  } else {
    bindContactForms();
    bindNewsletterForms();
  }
})();
