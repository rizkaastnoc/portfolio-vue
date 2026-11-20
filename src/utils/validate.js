const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact({ name = "", email = "", message = "" }) {
  const errors = {};

  if (name.trim().length < 3) {
    errors.name = "Nama minimal 3 karakter.";
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Masukkan email yang valid, misalnya nama@email.com.";
  }
  if (message.trim().length < 10) {
    errors.message = "Pesan minimal 10 karakter.";
  }

  return errors;
}
