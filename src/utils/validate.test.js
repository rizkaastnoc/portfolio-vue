import { describe, it, expect } from "vitest";
import { validateContact } from "./validate";

describe("validateContact", () => {
  it("lolos jika semua field valid", () => {
    const errors = validateContact({
      name: "Budi Santoso",
      email: "budi@email.com",
      message: "Halo, saya tertarik dengan project Anda.",
    });
    expect(errors).toEqual({});
  });

  it("menolak form kosong", () => {
    const errors = validateContact({ name: "", email: "", message: "" });
    expect(Object.keys(errors)).toEqual(["name", "email", "message"]);
  });

  it("menolak format email yang salah", () => {
    const errors = validateContact({
      name: "Budi",
      email: "budi@email",
      message: "Pesan yang cukup panjang.",
    });
    expect(errors.email).toBeDefined();
    expect(errors.name).toBeUndefined();
  });
});
