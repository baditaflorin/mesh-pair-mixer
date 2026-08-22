export default async function pairMixerScenario(a, b) {
  await a.getByRole("button", { name: "Mix pairs" }).click();
  await b.getByRole("heading", { name: "Current pairs" }).waitFor({ timeout: 10_000 });
  await a.waitForTimeout(1000);
  await a.getByRole("button", { name: "Mix pairs" }).click();
  await b.waitForTimeout(1800);
}
