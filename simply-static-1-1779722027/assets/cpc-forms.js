(function () {
  'use strict';

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

  function bindContactForms() {
    document.querySelectorAll('form.wpcf7-form').forEach(function (form) {
      if (form.dataset.cpcBound === '1') {
        return;
      }
      form.dataset.cpcBound = '1';

      var isReserva = window.location.pathname.indexOf('/reservas') !== -1;
      var endpoint = isReserva ? '/api/reservas' : '/api/contact';

      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setLoading(form, true);

        try {
          var payload;
          if (isReserva) {
            payload = {
              name: form.querySelector('[name="your-name"]')?.value || '',
              email: form.querySelector('[name="your-email"]')?.value || '',
              phone: form.querySelector('[name="tel-196"]')?.value || '',
              salon: form.querySelector('[name="Salon-a-Reservar"]')?.value || '',
              date: form.querySelector('[name="Fecha-Reserva"]')?.value || '',
              time: form.querySelector('[name="Hora-Reserva"]')?.value || '',
              message: form.querySelector('[name="your-message"]')?.value || '',
            };
          } else {
            payload = {
              name: form.querySelector('[name="your-name"]')?.value || '',
              email: form.querySelector('[name="your-email"]')?.value || '',
              subject: form.querySelector('[name="your-subject"]')?.value || '',
              message: form.querySelector('[name="your-message"]')?.value || '',
            };
          }

          var result = await postJson(endpoint, payload);
          setOutput(form, result.message, !result.success);
          if (result.success) {
            form.reset();
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
