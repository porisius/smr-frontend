const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-2ce52623.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-034558c7.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-21020444.css", "/smr-frontend/staging/_app/immutable/error.svelte-465a1520.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-b0b36299.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-9167587f.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-146bf3b5.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-730faa17.js", "/smr-frontend/staging/_app/immutable/pages/admin/tag-manager.svelte-2f9450f6.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-166fc476.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-99561626.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-aa106d18.js", "/smr-frontend/staging/_app/immutable/assets/pages/api-docs/index.svelte-1c1e4dfd.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-ef316428.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-e3bffcc2.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-1e0c2bf3.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-4751c28d.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-cbaf75fd.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-42e8bf69.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-36b15999.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-6cc5e5ac.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-69e143be.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-ea54d434.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-bbfd40b2.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-32d64272.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-5062a5bd.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-8ee696f0.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-d1834f4d.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-52da8474.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-24239154.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-52d06fd3.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-653d165d.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-80ef5ebf.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-e7a1b133.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-22698a15.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-f30eeeff.js", "/smr-frontend/staging/_app/immutable/chunks/user-6e2eeec5.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-c348dc95.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-43a8ad25.js", "/smr-frontend/staging/_app/immutable/chunks/stores-a04bccbe.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-3f77241b.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-fd872502.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-7f2b67e3.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-1cc6d1a4.css", "/smr-frontend/staging/_app/immutable/chunks/forms-874c16ac.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-ca9de549.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-9fd7b49b.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-2c14e279.js", "/smr-frontend/staging/_app/immutable/chunks/gql-a60281d5.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-ec184009.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-fe347dff.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-74e51756.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-5ec95183.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-23eab7b7.js", "/smr-frontend/staging/_app/immutable/chunks/TagList-45681d2c.js", "/smr-frontend/staging/_app/immutable/assets/TagList-92a9d7da.css", "/smr-frontend/staging/_app/immutable/chunks/ModForm-0c876215.js", "/smr-frontend/staging/_app/immutable/chunks/ModCompatibilityEdit-051ea801.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-2c867161.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
const n = ["/smr-frontend/staging/assets/android-chrome-192x192.png", "/smr-frontend/staging/assets/android-chrome-512x512.png", "/smr-frontend/staging/assets/apple-touch-icon.png", "/smr-frontend/staging/assets/browserconfig.xml", "/smr-frontend/staging/assets/favicon-16x16.png", "/smr-frontend/staging/assets/favicon-32x32.png", "/smr-frontend/staging/assets/favicon.ico", "/smr-frontend/staging/assets/fonts/flow-rounded.woff", "/smr-frontend/staging/assets/mstile-150x150.png", "/smr-frontend/staging/assets/safari-pinned-tab.svg", "/smr-frontend/staging/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/staging/images/bg_nologo.webp", "/smr-frontend/staging/images/dog_aw_yis_pats.gif", "/smr-frontend/staging/images/dog_boing.gif", "/smr-frontend/staging/images/dog_stand.gif", "/smr-frontend/staging/images/mods_mobile.webp", "/smr-frontend/staging/images/no_image.webp", "/smr-frontend/staging/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/staging/images/sf_modding_logo.webp", "/smr-frontend/staging/images/smm_background.webp", "/smr-frontend/staging/images/smm_hand.webp", "/smr-frontend/staging/images/smm_icon_white.webp", "/smr-frontend/staging/manifest.json", "/smr-frontend/staging/robots.txt", "/smr-frontend/staging/smui.css"];
const t = self;
const a = `cache${s}`;
const i = e.concat(n);
const m = new Set(i);
t.addEventListener("install", (s2) => {
  s2.waitUntil(caches.open(a).then((s3) => s3.addAll(i)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (s2) => {
  s2.waitUntil(caches.keys().then(async (s3) => {
    for (const e2 of s3) {
      if (e2 !== a) {
        await caches.delete(e2);
      }
    }
    t.clients.claim();
  }));
});
async function r(e2) {
  const n2 = await caches.open(`offline${s}`);
  try {
    const s2 = await fetch(e2);
    n2.put(e2, s2.clone());
    return s2;
  } catch (s2) {
    const t2 = await n2.match(e2);
    if (t2) {
      return t2;
    }
    throw s2;
  }
}
t.addEventListener("fetch", (s2) => {
  if (s2.request.method !== "GET" || s2.request.headers.has("range")) {
    return;
  }
  const e2 = new URL(s2.request.url);
  const n2 = e2.protocol.startsWith("http");
  const t2 = e2.hostname === self.location.hostname && e2.port !== self.location.port;
  const a2 = e2.host === self.location.host && m.has(e2.pathname);
  const i2 = s2.request.cache === "only-if-cached" && !a2;
  if (n2 && !t2 && !i2 && a2 && !s2.request.url.includes("start")) {
    s2.respondWith((async () => {
      const e3 = a2 && await caches.match(s2.request);
      return e3 || r(s2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
