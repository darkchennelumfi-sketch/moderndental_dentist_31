import { expect, test, type Page } from "@playwright/test";

const routes = [
  "/",
  "/team",
  "/team/dr-christian-meland",
  "/team/dr-amber-wentz",
  "/team/dr-eric-meland",
  "/services",
  "/new-patients",
  "/contact",
] as const;

function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  return errors;
}

test.describe("route health", () => {
  for (const route of routes) {
    test(`${route} renders without console errors`, async ({ page }) => {
      const errors = trackErrors(page);
      const response = await page.goto(route, { waitUntil: "networkidle" });

      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator("main")).toBeVisible();

      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1000);

      await expect
        .poll(
          async () =>
            page.locator("img").evaluateAll((images) =>
              images
                .filter((image) => !image.getAttribute("src")?.includes("data:"))
                .filter((image) => (image as HTMLImageElement).checkVisibility())
                .filter((image) => (image as HTMLImageElement).naturalWidth === 0)
                .map((image) => image.getAttribute("alt") ?? image.getAttribute("src")),
            ),
          { timeout: 10_000 },
        )
        .toEqual([]);

      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
      }));
      expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.viewport + 1);

      expect(errors).toEqual([]);
    });
  }
});

test("primary navigation reaches the team page", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Mobile" })
      .getByRole("link", { name: /Team/ })
      .click();
  } else {
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Team" }).click();
  }
  await expect(page).toHaveURL(/\/team$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Three doctors");
});

test("services filter and dialog work", async ({ page }) => {
  await page.goto("/services");
  await page.getByRole("tab", { name: "Cosmetic" }).click();
  await expect(page.getByRole("button", { name: /Teeth Whitening/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Dental Crowns/ })).toHaveCount(0);

  await page.getByRole("button", { name: /Teeth Whitening/ }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "Teeth Whitening" })).toBeVisible();
  await dialog.getByRole("button", { name: "Close dialog" }).click();
  await expect(dialog).toBeHidden();
});

test("new patient FAQ expands", async ({ page }) => {
  await page.goto("/new-patients");
  const question = page.getByRole("button", {
    name: /Where is Modern Dental located/,
  });
  await question.click();
  await expect(
    page.getByText("1600 2nd Ave SW, STE 22, Minot, North Dakota 58701"),
  ).toBeVisible();
});

test("contact form validates and submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name *").fill("Test Patient");
  await page.getByLabel("Email *").fill("not-an-email");
  await page.getByLabel("Phone *").fill("(701) 555-0123");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();

  await page.getByLabel("Email *").fill("test@example.com");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByLabel("Subject *").fill("Appointment question");
  await page
    .getByLabel("Message *")
    .fill("I would like to ask about scheduling a visit with the team.");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(
    page.getByRole("heading", { name: "Success! Message received." }),
  ).toBeVisible();
});

test("contact API rejects invalid payloads and accepts valid ones", async ({
  request,
}) => {
  const invalid = await request.post("/api/contact", {
    data: { name: "A", email: "bad", phone: "1", subject: "", message: "" },
  });
  expect(invalid.status()).toBe(422);

  const valid = await request.post("/api/contact", {
    data: {
      name: "Test Patient",
      email: "test@example.com",
      phone: "(701) 555-0123",
      subject: "Appointment question",
      message: "I would like to ask about scheduling a visit with the team.",
    },
  });
  expect(valid.status()).toBe(200);
  await expect(valid.json()).resolves.toMatchObject({ ok: true });
});
