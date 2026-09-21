import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers:{ accept:"text/html" } }), { ASSETS:{ fetch:async()=>new Response("Not found",{status:404}) } }, { waitUntil(){}, passThroughOnException(){} });
}

test("server-renders the ALTYN coach-led landing", async () => {
  const response = await render();
  assert.equal(response.status,200);
  assert.match(response.headers.get("content-type")??"",/^text\/html\b/i);
  const html = await response.text();
  assert.match(html,/<title>ALTYN School — Олимпиадаға жүйелі дайындық<\/title>/i);
  assert.match(html,/Күшті тренермен/);
  assert.match(html,/Тренерлер/);
  assert.match(html,/ДАЙЫНДЫҚ ЖҮЙЕСІ/);
  assert.match(html,/Тегін диагностика/);
});

test("does not advertise unavailable products or graduate proof", async () => {
  const response = await render();
  const html = await response.text();
  assert.doesNotMatch(html,/ALTYN LMS|LMS-ке кіру|Оқушылар нәтижесі|түлектер/i);
  assert.doesNotMatch(html,/1 500\+|100\+ жүлдегер|85,8%/i);
});
